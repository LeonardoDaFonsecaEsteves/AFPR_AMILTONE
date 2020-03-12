/** METHODE POUR RECUPERER TEST COMPLET */
/** ENVOI D'UN TEST + CREATION DU CHAMPS RESULTE USER */
const moment = require("moment");
const sql = require("../../config/db.config");
const email = require("../../utils/send_email/send_mail");
let date = moment().format("YYYY-MM-DD");

// selectionne le test dans la bdd
exports.test_for_user = (req, res) => {
  let id_test = req.params.id;
  sql.query(`SELECT *  FROM quiz WHERE id_quiz = ${id_test}`, (err, Quiz) => {
    get_id_question(res, Quiz[0]);
  });
};

// recupere les ids des question
const get_id_question = (res, quiz) => {
  let IDQ = [];
  sql.query(
    `SELECT questions_id_questions FROM questions_has_quiz WHERE quiz_id_quiz = ${quiz.id_quiz}`,
    (err, rows_id_Q) => {
      for (let i = 0; i < rows_id_Q.length; i++) {
        let idQuesiton = rows_id_Q[i].questions_id_questions;
        IDQ.push(idQuesiton);
      }
      get_questions_value(res, quiz, IDQ);
    }
  );
};

// recupere la valeur des questions
const get_questions_value = (res, quiz, IDQ) => {
  let Q = [];
  sql.query(`SELECT * FROM questions WHERE 1`, (err, Question) => {
    IDQ.forEach(element => {
      Q.push(Question.filter(x => x.id_questions === element));
    });
    Q = Q.map(val => val[0]);
    get_proposition_value(res, quiz, IDQ, Q);
  });
};

// recupere les proposition associe a la question
const get_proposition_value = (res, quiz, IDQ, Q) => {
  let Pro = [];
  sql.query(
    `SELECT id_propositions, wording, questions_id_questions FROM propositions WHERE 1`,
    (err, Proposition) => {
      IDQ.forEach(element => {
        Pro.push(Proposition.filter(x => x.questions_id_questions === element));
      });
      miseEnForme(res, quiz, Q, Pro);
    }
  );
};

// met en forme le test pour l'envoi au client
const miseEnForme = (res, quiz, Q, P) => {
  let pushprop = val => {
    return {
      ...val,
      propositions: P.filter(
        x => x[0].questions_id_questions === val.id_questions
      )[0]
    };
  };
  let result = Q.map(val => pushprop(val));
  quiz.questions = result;

  res.send(quiz);
};

// envoi le test a lutilisateur
exports.send_test = (req, res) => {
  let id_test = req.params.id_test;
  let id_user = req.params.id_user;
  let date = moment().format("YYYY-MM-DD");
  sql.query(
    `INSERT INTO user_results( score, sending_date,  users_id_users, quiz_id_quiz) VALUES (${0},${JSON.stringify(
      date
    )},${id_user},${id_test})`,
    (err, rows) => {
      sql.query(`SELECT email FROM users WHERE ${id_user}`, (err, email_user) =>
        email.send_email(
          JSON.stringify(email_user),
          `http://192.168.1.12:3000/user/${id_user}/test/${id_test}/result/${rows.insertId}`
        )
      );
      res.send(`test envoyé`);
    }
  );
};

// set dans la bdd que le test a commence
exports.test_is_start = (req, res) => {
  let id_result = req.params.id_result;
  sql.query(
    `UPDATE user_results SET is_started = 1 WHERE id_user_results = ${id_result}`,
    (err, row) => {
      if (err) throw err;
      else {
        res.send("test commencé");
      }
    }
  );
};

// sauvegarde les reponse de lutilisateur
exports.send_test_result = (req, res) => {
  let id_result = req.params.id_result;
  let content = req.body;
  let date = moment().format("YYYY-MM-DD");
  content.response_date = date;
  sql.query(
    `UPDATE user_results SET ?  WHERE id_user_results = ${id_result} AND response_date IS NULL`,
    [content],
    (err, row) => {
      if (err) throw err;
      else {
        res.send("Resultat sauvegardé");
      }
    }
  );
  check_score(content);
};

// calcule le score total des reponse avec la correction
const check_score = data => {
  console.log("data => ", data);
};

// methode pour verifie si le test a commencé
exports.check_is_started = (req, res) => {
  let id_result = req.params.id_result;
  sql.query(
    `SELECT is_started FROM user_results WHERE id_user_results = ${id_result}`,
    (err, is_start) => {
      res.status(200).send(JSON.stringify(is_start[0].is_started));
    }
  );
};

// renvoi tout les test dans la bdd
exports.test = (req, res) => {
  sql.query(`SELECT * FROM quiz`, (err, Quiz) => {
    if (err) throw err;
    res.send(Quiz);
  });
};

// recupere la duree de chaque question pour la duree total du test
exports.new_test = (req, res) => {
  let T = req.body;
  sql.query(
    `SELECT id_questions, duration FROM questions WHERE 1`,
    (err, duree) => {
      let somme = T.id_question.map(
        val => duree.find(x => x.id_questions === val).duration
      );
      somme = somme.reduce((accumulateur, valeurCourante) => {
        return accumulateur + valeurCourante;
      }, 0);
      set_quiz_bdd(res, T, somme);
    }
  );
};

// cree le test
const set_quiz_bdd = (res, T, time) => {
  sql.query(
    `INSERT INTO quiz( date_creation, level, language, sections,duration) 
  VALUES (
    ${JSON.stringify(date)},
    ${JSON.stringify(T.level)},
    ${JSON.stringify(T.language)},
    ${JSON.stringify(T.sections)},
    ${JSON.stringify(time)})`,
    (err, row) => {
      T.id_question.forEach(id => {
        sql.query(
          `INSERT INTO questions_has_quiz (questions_id_questions, quiz_id_quiz) VALUES (${JSON.stringify(
            id
          )},${JSON.stringify(row.insertId)})`
        );
      });
    }
  );
  res.send("tests ajouté");
};

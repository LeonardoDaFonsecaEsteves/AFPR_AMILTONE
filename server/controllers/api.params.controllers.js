const moment = require("moment");
const sql = require("../config/db.config");
const email = require("../utils/send_email/send_mail");
let id = [];
let Questions = [];

/** METHODE POUR RECUPERER TEST COMPLET */
exports.test_for_user = (req, res) => {
  let id_test = req.params.id;
  sql.query(`SELECT *  FROM quiz WHERE id_quiz = ${id_test}`, (err, Quiz) => {
    questions_has_quiz(id_test, returnQP => {
      Quiz = { ...Quiz[0], question: returnQP };
      res.send(Quiz);
    });
  });
};

const questions_has_quiz = (id_test, returnQP) => {
  sql.query(
    `SELECT questions_id_questions FROM questions_has_quiz WHERE quiz_id_quiz = ${id_test}`,
    (err, idQuestions) => {
      for (let i = 0; i < idQuestions.length; i++) {
        id.push(idQuestions[i].questions_id_questions);
      }
    }
  );
  QuestionFromTest(id, Callback => {
    returnQP(Callback);
    id = [];
  });
};

const QuestionFromTest = (id, Callback) => {
  console.log(id);
  for (let i = 0; i < id.length; i++) {
    sql.query(
      `SELECT * FROM questions WHERE id_questions = ${id[i]}`,
      (err, Question) => {
        if (err) throw err;
        get_proposition(id[i], getPropositions => {
          Question = { ...Question[0], proposition: getPropositions };
          Questions.push(Question);
        });
      }
    );
  }
  Callback(Questions);
  Questions = [];
};

exports.questions_id = (req, res) => {
  let id_questions = req.params.id;
  sql.query(
    `SELECT * FROM questions WHERE id_questions = ${id_questions}`,
    (err, Question) => {
      if (err) throw err;
      get_proposition(id_questions, getPropositions => {
        Question = { ...Question[0], proposition: getPropositions };
        res.send(Question);
      });
    }
  );
};

const get_proposition = (id_questions, getPropositions) => {
  sql.query(
    `SELECT id_propositions, wording FROM propositions WHERE questions_id_questions = ${id_questions}`,
    (err, Proposition) => {
      if (err) throw err;
      getPropositions(Proposition);
    }
  );
};
/***********************/

/** ENVOI D'UN TEST + CREATION DU CHAMPS RESULTE USER */

exports.send_test = (req, res) => {
  let id_test = req.params.id_test;
  let id_user = req.params.id_user;
  let date = moment().format("YYYY-MM-DD");

  sql.query(
    `INSERT INTO user_results( score, sending_date,  users_id_users, quiz_id_quiz) VALUES (${0},${JSON.stringify(
      date
    )},${id_user},${id_test})`,
    (err, rows) => {
      email.send_email(
        "nhosteins@amiltone.com",
        `localhost:3000/user/${id_user}/test/${id_test}/result/${rows.insertId}`
      );
      res.send(`test envoyé`);
    }
  );
};

exports.send_test_result = (req, res) => {
  let date = moment().format("YYYY-MM-DD");

  let id_result = req.params.id_result;
  sql.query(
    `SELECT * FROM user_results WHERE id_user_results = ${id_result}`,
    (err, rows) => {
      if (err) throw err;

      if (rows[0].response_date === null) {
        sql.query(
          `UPDATE user_results SET response_date=${JSON.stringify(
            date
          )},responses_user=${JSON.stringify(req.body.responses_users)}`,
          err => {
            if (err) throw err;
            else {
              res.send("Resultat sauvegardé");
            }
          }
        );
      } else {
        res.send("TEST déja passé");
      }
    }
  );
};

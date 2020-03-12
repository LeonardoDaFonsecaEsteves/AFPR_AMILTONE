/** METHODE POUR RECUPERE TOUTES LES QUESTIONS EST PROPOSITIONS */
/** CREE DE NOUVELLE QUESTIONS */
const moment = require("moment");
const sql = require("../../config/db.config");
let date = moment().format("YYYY-MM-DD");

// renvoie toutes les ids des questions
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

// recupere les proposition des questions
const get_proposition = (id_questions, getPropositions) => {
  sql.query(
    `SELECT id_propositions, wording FROM propositions WHERE questions_id_questions = ${id_questions}`,
    (err, Proposition) => {
      if (err) throw err;
      getPropositions(Proposition);
    }
  );
};

// rrenvoie tout les questions
exports.questions = (req, res) => {
  sql.query(`SELECT * FROM questions`, (err, Question) => {
    if (err) throw err;
    res.send(Question);
  });
};

// cree une nouvelle questions avec c'est proposition
exports.new_question = (req, res) => {
  let Q = req.body;
  sql.query(
    `INSERT INTO questions(date_creation, level, language, sections, duration, question_type, wording_q) 
      VALUES (
      ${JSON.stringify(date)},
      ${JSON.stringify(Q.level)},
      ${JSON.stringify(Q.language)},
      ${JSON.stringify(Q.sections)},
      ${JSON.stringify(Q.duration)},
      ${JSON.stringify(Q.question_type)},
      ${JSON.stringify(Q.wording_q)})`,
    (err, rows) => {
      Q.proposition.forEach(el => {
        sql.query(
          `INSERT INTO propositions(wording, is_answer, questions_id_questions) VALUES (${JSON.stringify(
            el.wording
          )},${JSON.stringify(el.is_answer)},${JSON.stringify(rows.insertId)})`
        );
      });
    }
  );
  res.send("question ajouté");
};

const sql = require("../config/db.config");

exports.test = (req, res) => {
  sql.query(`SELECT * FROM quiz`, (err, Quiz) => {
    if (err) throw err;
    res.send(Quiz);
  });
};

exports.questions = (req, res) => {
  sql.query(`SELECT * FROM questions`, (err, Question) => {
    if (err) throw err;
    res.send(Question);
  });
};

exports.users = (req, res) => {
  sql.query(`SELECT * FROM users`, (err, User) => {
    if (err) throw err;
    res.send(User);
  });
};

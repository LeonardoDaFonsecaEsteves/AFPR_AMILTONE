const sql = require("../config/db.config");

exports.get_all_quiz = getQuiz => {
  // Recuperation des quizs
  sql.query(`SELECT * FROM quiz`, (err, Quiz) => {
    if (err) throw err;
    getQuiz(Quiz);
  });
};

// Recuperation des questions
exports.get_all_questions = getQuestions => {
  sql.query(`SELECT * FROM questions`, (err, Question) => {
    if (err) throw err;
    getQuestions(Question);
  });
};

// Recuperation des proposition
exports.get_all_proposition = getPropositions => {
  sql.query(`SELECT * FROM `, (err, Proposition) => {
    if (err) throw err;
    getPropositions(Proposition);
  });
};

exports.get_all_users = getUsers => {
  sql.query(`SELECT * FROM users`, (err, User) => {
    if (err) throw err;
    getUsers(User);
  });
};

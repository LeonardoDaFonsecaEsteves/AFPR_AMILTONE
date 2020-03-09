const sql = require("../../config/db.config");
const state = {
  quiz: [],
  questions: [],
  propositions: []
};

//Creation des test par uilisateur
exports.get_test_for_user = (id_test, id_user, getTestForUser) => {
  sql.query(`SELECT *  FROM quiz WHERE id_quiz = ${id_test}`, (err, QUIZ) => {
    questions_has_quiz(id_test, returnQP => {
      state.quiz.push(QUIZ);
      state.questions.push(returnQP.getQuestions);
      state.propositions.push(returnQP.getPropositions);
      getTestForUser(state);
    });
  });
};

// Recuperation des question par quiz,
const questions_has_quiz = (id_test, returnQP) => {
  sql.query(
    `SELECT questions_id_questions FROM questions_has_quiz WHERE quiz_id_quiz = ${id_test}`,
    (err, question) => {
      for (let i = 0; i < question.length; i++) {
        get_questions(question[i].questions_id_questions, getQuestions => {
          get_proposition(
            question[i].questions_id_questions,
            getPropositions => {
              returnQP({ getQuestions, getPropositions });
            }
          );
        });
      }
    }
  );
};

const get_questions = (id_question, getQuestions) => {
  sql.query(
    `SELECT * FROM questions WHERE id_questions = ${id_question}`,
    (err, Question) => {
      if (err) throw err;
      getQuestions(Question);
    }
  );
};

const get_proposition = (id_questions, getPropositions) => {
  sql.query(
    `SELECT * FROM propositions WHERE questions_id_questions = ${id_questions}`,
    (err, Proposition) => {
      if (err) throw err;
      getPropositions(Proposition);
    }
  );
};

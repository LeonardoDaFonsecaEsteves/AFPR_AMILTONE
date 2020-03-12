module.exports = function(app) {
  const users = require("../controllers/users/users");
  const test = require("../controllers/quiz/quiz");
  const question = require("../controllers/quesitons/questions");

  // routes pour les users
  app
    .route("/users")
    .get(users.users)
    .post(users.new_user);

  // routes pour le test
  app
    .route("/tests")
    .get(test.test)
    .post(test.new_test);
  app.route("/check/:id_result").get(test.check_is_started);
  app.route("/start/:id_result").put(test.test_is_start);
  app.route("/tests/:id").get(test.test_for_user);
  app.route("/send/test/:id_test/user/:id_user").post(test.send_test);
  app
    .route("/user/:id_user/test/:id_test/result/:id_result")
    .put(test.send_test_result);

  // routes pour les questions
  app
    .route("/questions")
    .get(question.questions)
    .post(question.new_question);
  app.route("/questions/:id").get(question.questions_id);
};

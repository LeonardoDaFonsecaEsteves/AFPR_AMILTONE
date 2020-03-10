module.exports = function(app) {
  const api_single = require("../controllers/api.single.controller");
  const api_params = require("../controllers/api.params.controllers");
  // api Routes simple
  app.route("/tests").get(api_single.test);
  app.route("/questions").get(api_single.questions);
  app.route("/users").get(api_single.users);

  // api Routes avec params
  app.route("/tests/:id").get(api_params.test_for_user);
  app.route("/send/test/:id_test/user/:id_user").post(api_params.send_test);
  app
    .route("/user/:id_user/test/:id_test/result/:id_result")
    .put(api_params.send_test_result);

  app.route("tests/:id_test/answers/");
  app.route("/questions/:id").get(api_params.questions_id);
  // app.route("/users/:id/results").get(api_params.users_results);
  // app.route("/user/:id_user/test/:id_test").get(api_params.test_for_user);
};

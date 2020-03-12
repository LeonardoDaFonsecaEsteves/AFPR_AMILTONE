/** METHODE POUR CREE ET AJOUTE UN NOUVEAU USER */
const sql = require("../../config/db.config");

// renvoi touts les utilisateur au client
exports.users = (req, res) => {
  sql.query(`SELECT * FROM users`, (err, User) => {
    if (err) throw err;
    res.send(User);
  });
};

// cree un nouveau utilisateur
exports.new_user = (req, res) => {
  let user = req.body;
  sql.query(
    `INSERT INTO users(firstname, lastname, email,role) VALUES (${JSON.stringify(
      user.firstname
    )}, ${JSON.stringify(user.lastname)}, ${JSON.stringify(
      user.email
    )}, "user")`
  );
  res.send("user ajouté");
};

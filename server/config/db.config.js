const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
});

module.exports = connection;

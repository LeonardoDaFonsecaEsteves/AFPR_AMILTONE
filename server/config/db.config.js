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
  if (error) console.log("error connected to the database.");
  else console.log("Successfully connected to the database.");
});

module.exports = connection;

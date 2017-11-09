//this is where the code for the conncection will go, 
//need to export the object or the function. just one connection so prob just object

// need to make the table before tdoing anything else. 
// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
//connection.query(CREATE TABLE IF NOT EXISTS burgers);
});

// Export connection
module.exports = connection;

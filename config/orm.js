//need to include the funtions selectALL, insertOne, updateOne
var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if(err) throw err;
      cb(result);
      //need to do more?
    });
  },
  insertOne: function(table, burgerName, date,  cb) {
    var queryString = "INSERT INTO ?? (burgerName) VALUES (??, ??)";
    connection.query(queryString, [table, burgerName, date], function(err, result) {
      if(err) throw err;
      console.log("the result of insertOne orm call: ");
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(table, id, devoured, cb) {
    var queryString = "UPDATE ?? SET devoured = ?? WHERE id = ??";
    connection.query(queryString, [table, devoured, id], function(err, result) {
      if(err) throw err;
      console.log("the result of updateOne orm call: ");
      console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;

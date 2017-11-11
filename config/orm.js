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
    console.log("orm call: table, burger_name, date,  cb", table, burgerName, date);
    var queryString = "INSERT INTO ?? (burger_name, created_at) VALUES ('??', '??')";
    connection.query(queryString, [table, burgerName, date], function(err, result) {
      if(err){
        console.log(err);
        throw err;
      } 
      var data = {
        id: result.insertId,
        burger_name: burgerName,
        devoured: false,
        created_at: data
      };
      cb(data);
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


var burger = require("../models/burger.js");

module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/index", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    var arrOfBurgers = [];
    for (var i = 0; i < res.length; i++) {
      var burger = new burger();
      burger.setValues(res[i].id, res[i].name, res[i].devoured, res[i].created_at);       
      arrOfBurgers.push(burger);
    }

    res.send(arrOfBurgers);
  });

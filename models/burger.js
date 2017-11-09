//this i the burger.js file
//import orm.j
//code ill call the orm uing the burger model
var moment = require('moment');
var orm = require("../config/orm.js");


var burger = function (){
    this.id = null; 
    this.burger_name = "";
    this.devoured = false;
    this.created_at = null;
  
  this.setValues = function (id, name, devoured, created_at){
    this.id = id;
    this.burger_name = name;
    this.devoured = devoured;
    this.created_at = created_at;
  };

  this.selectAll = function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  };
  

  this.insertOne = function(burgerName, cb) {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    orm.insertOne("burgers", burgerName, date,  function(res) {
      //self.id = res[0].id?
      // self.id = res.body.burger.id;
      // self.burger_name = res.body.burger.burger_name;
      // self.devoured = res.body.burger.devoured;
      // self.created_at = res.body.burger.created_at;
      cb(res);
    });
  };

  this.updateOne = function(id, devoured, cb) {
    orm.updateOne("burgers", id, devoured, function(res) {
      // self.id = res.body.burger.id;
      // self.burger_name = res.body.burger.burger_name;
      // self.devoured = res.body.burger.devoured;
      // self.created_at = res.body.burger.created_at;
      cb(res);
    });
  };

};

module.exports = burger;


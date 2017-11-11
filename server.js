var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use('/public' ,express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//ar routes = require("./controller/burgers_controller.js");

//app.use("/", routes);


var burger = require("./models/burger.js");
// Create all our routes and set up logic within those routes where required.
//put here and keep calling render? or let the on click make a get requet?
//var burgers = [];
app.get("/index/burgers", function(req,res){
	 var burgers = [];
	 var burger1 = new burger();
	 var temp = null;
   burger1.selectAll(function(data){
	 	temp = data;
    //console.log("the data is", data);
	 for (var i = 0; i < temp.length; i++) {
      var burgerToPush = {
        id: temp[i].id, 
        burger_name: temp[i].burger_name,
        devoured: temp[i].devoured, 
        created_at: temp[i].created_at
      }
      //burgerToPush.setValues(temp[i].id, temp[i].burger_name, temp[i].devoured, temp[i].created_at); 
      burgers.push(burgerToPush);
    }
    console.log("about to render", burgers);
    res.render("index", burgers);
    });
   //res.render("index", burgers);
});

app.post("/index/burgers", function(req, res) {
  var burgerToAdd = new burger();
  burgerToAdd.insertOne(req.body.burger_name, function(data){
  	 
     res.json(
  	 	{ 
  	 		id: data.id,
  	 		burger_name: data.burger_name,
  	 		devoured: data.devoured,
  	 		created_at: data.created_at
  	 	});
     res.end();
  });
});

app.put("/index/burgers/:id", function(req, res) {
  var id = req.params.id;
  var burgerUpdate = new burger();
  burgerUpdate.updateOne(id, devoured, function(data){
  	console.log("the Update was a success, the item is now: ");
    console.log(data);
  });
});

app.listen(port);

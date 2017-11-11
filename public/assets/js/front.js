//$(function() {
  //attach to the devour button
$(document).ready(function(){
  $("#eatMe").on("click", function(event) {
    console.log("inide the eatMe call");
    var idFront = $("#burgerId").html();
    var ate = true;

    var burger = {
      id:idFront,
      devoured: ate
    };

    // Send the PUT request.
    $.ajax("/index/burgers:" + id, {
      type: "PUT",
      data: burger
    }).done(
      function() {
        console.log("changed devoured to", ate);
        // Reload the page to get the updated list
        //need to get rid of the id in the path? 
        location.reload();
      }
    );
  });

  $("#burgerAdd").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("inide the burgerAdd call");

    var burger = {
      burger_name: $("#burger").val().trim(),
    };
  

    // Send the POST request.
    $.ajax("/index/burgers", {
      type: "POST",
      data: burger
    }).done(
      function(res) {
        console.log("created new burger", res);
        location.reload();
      }
    );
  });
});

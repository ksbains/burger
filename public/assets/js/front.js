//$(function() {
  //attach to the devour button
  $("#eatMe").on("click", function(event) {
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
    }).then(
      function() {
        console.log("changed devoured to", ate);
        // Reload the page to get the updated list
        //need to get rid of the id in the path? 
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burger = {
      name: $("#burger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/index/burgers", {
      type: "POST",
      data: burger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
//});

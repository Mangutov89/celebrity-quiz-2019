$(document).ready(function() {
  $(".will").hide();
  $(".smith").hide();
  $(".albert").hide();
  $(".taylor").hide();
  $(".ellen").hide();
  $(".streep").hide();

  $("#celebform").submit(function(event) {
    event.preventDefault();

    var name = $("#person1").val();
    var age = $("#age").val();
    var gender = $("#gender").val();

    if (name) {
      if (gender === "Female") {
        if (age <= 21) {
          $(".taylor").show();
          $(".will").hide();
          $(".smith").hide();
          $(".albert").hide();
          $(".ellen").hide();
          $(".streep").hide();
        } else if (age >= 22 && age < 60) {
          $(".ellen").show();
          $(".will").hide();
          $(".smith").hide();
          $(".albert").hide();
          $(".taylor").hide();
          $(".streep").hide();
        } else {
          $(".streep").show();
          $(".will").hide();
          $(".smith").hide();
          $(".albert").hide();
          $(".taylor").hide();
          $(".ellen").hide();
        }
      } else if (gender === "Male") {
        if (age <= 21) {
          $(".will").show();
          $(".smith").hide();
          $(".albert").hide();
          $(".taylor").hide();
          $(".ellen").hide();
          $(".streep").hide();
        } else if (age >= 22 && age < 60) {
          $(".smith").show();
          $(".will").hide();
          $(".albert").hide();
          $(".taylor").hide();
          $(".ellen").hide();
          $(".streep").hide();
        } else {
          $(".albert").show();
          $(".will").hide();
          $(".smith").hide();
          $(".taylor").hide();
          $(".ellen").hide();
          $(".streep").hide();
        }
      }
    } else {
      alert("enter name")
    }


    $(".name").text(name)


  });
});

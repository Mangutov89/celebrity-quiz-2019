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

    if (gender === "Female") {
      if (age <= 21) {
        $(".taylor").show();
      } else if (age >= 22 && age < 60) {
        $(".ellen").show();
      } else {
        $(".streep").show();
      }
    } else if (gender === "Male") {
      if (age <= 21) {
        $(".will").show();
      } else if (age >= 22 && age < 60) {
        $(".smith").show();
      } else {
        $(".albert").show();
      }
    }

    $(".name").text(name)


  });
});

$(document).ready(function () {
  $("#do-call").click(function () {
    $("#spinner-div").addClass("active");

    $.ajax({
      url: "https://api.srv3r.com/2seconds/",
      type: "GET",
      dataType: "json",
      success: function (res) {
        $("#message_string").text("The message is: " + res.message);
      },
      complete: function () {
        $("#spinner-div").removeClass("active");
      }
    });
  });
});
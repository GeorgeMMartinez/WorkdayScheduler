var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDate").html(currentDate);

function setTime () {
  var time = moment().format("dddd, MMM Do YYYY");

  currentDay.innerHTML = time;
};

$(document).ready(function () {
  function checkTime () {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
      var timeBLock = parseInt($(this).attr("id").split("hour")[1]);

      if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (timeBLock === currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
});

  $(".saveBtn").on("click", function () {
    var event = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, event);
  })

// retrieve values from local storage
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  checkTime();
  
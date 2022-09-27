//add current day at the top of the planner 
const currentDateEl = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDateEl);

const hours = $(".hour");
const timeOfDayEl = parseInt(moment().format("H"));

//function to check each hour block which is colour coded for past, present, future.
$.each(hours, function (i, hour) {
  let time = parseInt($(this).attr("id"));
  if (time === timeOfDayEl) {
    $(this).next().addClass("present");
  } else if (time < timeOfDayEl) {
    $(this).next().addClass("past");
  } else if (time > timeOfDayEl) {
    $(this).next().addClass("future");
  }
});

//Appointments(text area for agenda items), class = "event"; if Save button clicked, set item to local storage and continue

$(".saveBtn").on("click", function (event) {
  let appointmets =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, appointmets);
});

$(document).ready(function () {
  if (localStorage["900hr"] !== null && localStorage["900hr"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9am"] + "</p>");
    $("#nineAm").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1000hr"] !== null && localStorage["1000hr"] !== undefined) {
    var tenAm = $("<p>" + localStorage["1000hr"] + "</p>");
    $("#tenAm").append(tenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["11am"] !== null && localStorage["1100hr"] !== undefined) {
    var elevenAm = $("<p>" + localStorage["1100hr"] + "</p>");
    $("#elevenAm").append(elevenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1200hr"] !== null && localStorage["1200hr"] !== undefined) {
    var twelvePm = $("<p>" + localStorage["1200hr"] + "</p>");
    $("#twelvePm").append(twelvePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1300hr"] !== null && localStorage["1300hr"] !== undefined) {
    var onePm = $("<p>" + localStorage["1300hr"] + "</p>");
    $("#onePm").append(onePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1400hr"] !== null && localStorage["1400hr"] !== undefined) {
    var twoPm = $("<p>" + localStorage["1400hr"] + "</p>");
    $("#twoPm").append(twoPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1500hr"] !== null && localStorage["1500hr"] !== undefined) {
    var threePm = $("<p>" + localStorage["1500hr"] + "</p>");
    $("#threePm").append(threePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1600hr"] !== null && localStorage["1600hr"] !== undefined) {
    var fourPm = $("<p>" + localStorage["1600hr"] + "</p>");
    $("#fourPm").append(fourPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1700hr"] !== null && localStorage["1700hr"] !== undefined) {
    var fivePm = $("<p>" + localStorage["1700hr"] + "</p>");
    $("#fivePm").append(fivePm[0].innerText);
  } else {
    ("");
  }
});
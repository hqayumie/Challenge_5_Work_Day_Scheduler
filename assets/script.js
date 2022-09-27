//placing current day at top of week-day scheduler
const today= moment().format ('dddd, MMM DD YYYY');
$('#currentDay').text(today);

const timeSlot =$ ('.hour');
const timeOfDay = moment().format("H");
const savebtn = ('.saveBtn');

//function to check each hour within the timeblock to display  whether it's past, present or future.

$.each(timeSlot, function (i, hour ) {
    let hourEl = parseInt ($(this).attr('od'));
    if (hourEl === timeOfDay) {
        $(this).next().addClass("present");
      } else if (hourEl < timeOfDay) {
        $(this).next().addClass("past");
      } else if (hourEl > timeOfDay) {
        $(this).next().addClass("future");
      }
      $(this).next().children().text(localStorage.getItem(`todo ${i}`)|| '');
    });

    $(".saveBtn").on("click", function (event) {
        var calendarItem =
          event.target.parentElement.previousElementSibling.children[0].value;
        localStorage.setItem(event.target.attributes[0].value, calendarItem);
      });
      
  
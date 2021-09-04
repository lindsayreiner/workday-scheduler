//DOM Selectors

//Jumbotron Date
var todaysDate = moment()
$("#currentDay").text(todaysDate.format("dddd, MMMM Do YYYY"));

//Hour containers
var timeContainer = $('#time-container')
var nineAm = $('#9am');
var tenAm = $('#10am');
var elevenAm = $('#11am');
var twelvePm = $('#12pm');
var onePm = $('#1pm');
var twoPm = $('#2pm');
var threePm = $('#3pm');
var fourPm = $('#4pm');
var fivePm = $('#5pm');
var currentIndex = 0;

//Textbox
var calendarTextBoxEntry = $('#calendar-event');

//Submit buttons
var allSubmitBtns = $('.submitBtn')
var saveBtn1 = $('#save-btn1');
var saveBtn2 = $('#save-btn2');
var saveBtn3 = $('#save-btn3');
var saveBtn4 = $('#save-btn4');
var saveBtn5 = $('#save-btn5');
var saveBtn6 = $('#save-btn6');
var saveBtn7 = $('#save-btn7');
var saveBtn8 = $('#save-btn8');
var saveBtn9 = $('#save-btn9');

//Current time
const currentTime = moment().format("HHmm");
console.log(currentTime);

nineAm = 0900;
tenAm = 1000;
elevenAm = 1100;
twelvePm = 1200;
onePm = 1300;
twoPm = 1400;
threePm = 1500;
fourPm = 1600;
fivePm = 1700;




timeContainer.children.value.each(function (i) {

    if (timeContainer.children.value == currentTime) {
        $("#calendar-event").addClass('present');
    }

    if (timeContainer.children.value < currentTime) {
        $("#calendar-event").addClass('past');
    }

    if (timeContainer.children.value > currentTime) {
        $("#calendar-event").addClass('future');
    }
});

// if (nineAm < currentTime) {
//     $("#calendar-event").addClass('past');
// }










saveBtn1.on('click', function (e) {
    e.preventDefault();
    var allSavedEvents = [];
    localStorage.setItem('calendar-event', JSON.stringify(calendarTextBoxEntry.text));
});































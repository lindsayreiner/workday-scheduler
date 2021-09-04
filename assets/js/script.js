//DOM Selectors

//Jumbotron Date
var todaysDate = moment()
$("#currentDay").text(todaysDate.format("dddd, MMMM Do YYYY"));

//Hour containers
var timeSlotContainer = $('#time-container')
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
var saveBtn1 = $('#save-btn3');
var saveBtn1 = $('#save-btn4');
var saveBtn1 = $('#save-btn5');
var saveBtn1 = $('#save-btn6');
var saveBtn1 = $('#save-btn7');
var saveBtn1 = $('#save-btn8');
var saveBtn1 = $('#save-btn9');

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


saveBtn1.on('click', function () {
    console.log(hi)
})




// if ($('#9am').value < currentTime) {
//     $('#9am').addClass('past');
// }



// function colorCodedTime() {



//     if (timeSlotContainer[currentIndex].value == currentTime) {
//         timeSlotContainer[currentIndex].addClass('present')
//     };


//     if (timeSlotContainer[currentIndex].value < currentTime) {
//         timeSlotContainer[currentIndex].addClass('past')
//     };

//     if (timeSlotContainer[currentIndex].value > currentTime) {
//         timeSlotContainer[currentIndex].addClass('future')
//     };

// }

// colorCodedTime();

// allSubmitBtns.on('click', function () {
//     // console.log(e);
//     // e.preventDefault();
//     localStorage.setItem('calendar-event', JSON.stringify(calendarTextBoxEntry));


// });































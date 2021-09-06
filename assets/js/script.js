//DOM Selectors

var timeEl = $('#currentDay');

//Jumbotron Date
var todaysDate = moment()
$("#currentDay").text(todaysDate.format("dddd, MMMM Do YYYY hh:mm"));

//Event saved alert div
var saveAlert = $('#save-alert');

//Clear calendar button
var clearCalendarBtn = $('#clear-calendar')

//Hour divs countainer
var hours = $('.hour');
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


// console.log(nineAm[0].attributes[2].value)

//Text box content
var calendarEntries = $('.event-text');

//Save button container
var allSaveBtns = $('.saveBtn');

//Current time, hour only, military time
const currentTime = parseInt(moment().format("HH"));





function colorCoding() {

    $('.time').each(function () {
        const hourTimeBlocks = parseInt($(this).attr('value'));

        if (hourTimeBlocks === currentTime) {
            $(this).children('.event-text').addClass('present');
        };

        if (hourTimeBlocks < currentTime) {
            $(this).children('.event-text').addClass('past');
        }

        if (hourTimeBlocks > currentTime) {
            $(this).children('.event-text').addClass('future');
        }
    })

};



function getSavedEvents() {
    $('#save-btn1').siblings('.event-text').text(localStorage.getItem('save-btn1'));
    $('#save-btn2').siblings('.event-text').text(localStorage.getItem('save-btn2'));
    $('#save-btn3').siblings('.event-text').text(localStorage.getItem('save-btn3'));
    $('#save-btn4').siblings('.event-text').text(localStorage.getItem('save-btn4'));
    $('#save-btn5').siblings('.event-text').text(localStorage.getItem('save-btn5'));
    $('#save-btn6').siblings('.event-text').text(localStorage.getItem('save-btn6'));
    $('#save-btn7').siblings('.event-text').text(localStorage.getItem('save-btn7'));
    $('#save-btn8').siblings('.event-text').text(localStorage.getItem('save-btn8'));
    $('#save-btn9').siblings('.event-text').text(localStorage.getItem('save-btn9'));

};





$('.saveBtn').on('click', function (e) {
    e.preventDefault;

    // if ('calendar-event' = null) {
    // alert('Please input an event or task to save.');
    // return;
    // }

    console.log($(this).siblings('.event-text').val())

    var calendarEntry = $(this).siblings('.event-text').val();
    var militaryTime = $(this).attr('id');
    console.log(militaryTime);

    // var allSavedEvents = [];
    // var text = $('.event-text').value;
    // allSavedEvents.push(calendarEntry);


    localStorage.setItem(militaryTime, calendarEntry)
    getSavedEvents();

    saveAlert.removeClass('hidden');
    setTimeout(function () {
        saveAlert.addClass('hidden');
    }, 2000);
});




$('#clear-calendar').on('click', function () {
    $('.event-text').val('');
    localStorage.clear();
})



function updateTime() {
    timeEl.html(moment().format("ddd, MMMM Do YYYY hh:mm a"));
}


function init() {
    setInterval(updateTime, 1000);
    colorCoding();
    getSavedEvents();

}

init()

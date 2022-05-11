const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondEl = document.getElementById('second');
const newYear ="1 January 2023";

function CountDown() {
    const NewYearDate = new Date(newYear);
    const CurrentDate = new Date();
    const finalsecond = (NewYearDate - CurrentDate) / 1000;
    const days = Math.floor(finalsecond / 3600 / 24);
    const hours = Math.floor(finalsecond / 3600) % 24;
    const minutes = Math.floor(finalsecond / 60) % 60;
    const second = Math.floor(finalsecond) % 60;

    // console.log(days, hours , minutes,second);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondEl.innerHTML = second;
}
CountDown();
setInterval(CountDown, 1000);
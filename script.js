const { DateTime } = luxon;

let selectedTimezone = 'UTC';

document.getElementById('timezone-select').addEventListener('change', function(e) {
    selectedTimezone = e.target.value;
});

function displayTime() {
    const dateTime = DateTime.now().setZone(selectedTimezone);
    let hrs = dateTime.hour;
    let min = dateTime.minute;
    let sec = dateTime.second;
    let session = document.getElementById("session");

    const currentDayOfWeek = dateTime.weekdayLong;

    if(hrs >= 12){
        session.innerHTML = "PM";
    } else {
        session.innerHTML = "AM";
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("day").innerHTML = currentDayOfWeek;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}

setInterval(displayTime, 1000);
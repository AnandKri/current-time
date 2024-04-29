
function updateDateTime() {
    
    // const now = dayjs();
    const time = dayjs().format('HH:mm:ss')
    
    const date = dayjs().format('dddd, DD-MMM, YYYY')
    
    // dayjs.extend(utc)
    // dayjs.extend(timezone)
    const timeZone = dayjs.tz.guess()    
    
    const timeZoneElement = document.getElementById('timezone');
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    timeZoneElement.textContent = timeZone;
    timeElement.textContent = time;
    dateElement.textContent = date;
}


updateDateTime();

setInterval(updateDateTime, 1000);

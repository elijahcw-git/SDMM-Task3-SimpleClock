// Elijah C Walker - Software Development Mastermind Program
const weekdays = ['Sunday', 'Monday', 'Tuesday', "Wednesday", 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dateDisplay = document.querySelector('#dateDisplay');
const timeDisplay = document.querySelector('#timeDisplay')

function digitalClock(){
    let date = new Date();
    let seconds = date.getSeconds().toString().padStart(2,'0');
    let minutes = date.getMinutes().toString().padStart(2,'0');   
    let hours = date.getHours();
    let year = date.getFullYear();
    let weekDay = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    let meridian = 'AM';
    const suffix = getSuffix(day);
   
    if (hours > 11) meridian = 'PM'
    if (hours > 12) hours = (hours - 12).toString().padStart(2,'0');
   
    dateDisplay.textContent = `${weekdays[weekDay]}, ${months[month]} ${day}${suffix}, ${year}`;
    timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${meridian}`

}

function getSuffix(day){
    if (day < 4 || day > 20) {
        switch (day % 10) {
            case 1:
                return 'st'
            case 2:
                return 'nd'
            case 3:
                return 'rd'
        }
    }    
}

digitalClock();
setInterval(digitalClock, 1000)


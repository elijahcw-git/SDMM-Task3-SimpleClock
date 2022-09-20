//Elijah Walker
//SDMM

const weekdays = ['Sunday', 'Monday', 'Tuesday', "Wednesday", 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dateDisplay = document.querySelector('#dateDisplay');
const timeDisplay = document.querySelector('#timeDisplay')

function digitalClock(){


    //mutable variables to access date elements individually;
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();   
    let hours = date.getHours();
    let year = date.getFullYear();
    let weekDay = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    let meridian = 'AM';
   
    //If we hit noon, switch to PM
    //at 0 hours, will switch back to AM
    if (hours > 11){meridian = 'PM'}
    //Switch from military time to standard time
    if (hours > 12){hours = hours - 12;}

    //Add placeholder 0's
    if (hours < 10){hours = "0" + hours;}
    if (seconds < 10){seconds = "0" + seconds;}
    if (minutes < 10){minutes = "0" + minutes;}
     
    //Date suffix
    if (day === 1 || day === 21 || day === 31) day = day + 'st';
    else if(day === 2 || day === 22) day = day + 'nd'
    else if(day === 3 || day === 23) day = day + 'rd'
    else  day = day + 'th'
   

    //String literal to format the outputs of the date class
    dateDisplay.textContent = `${weekdays[weekDay]}, ${months[month]} ${day}, ${year}`;
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}${meridian}`

}

//@support-coaches 
//This redundant function call is here intentionally. It stops the initial loading delay
//before setInterval fires; may be a better way to do it.
digitalClock();

//call every second;
setInterval(digitalClock, 1000)


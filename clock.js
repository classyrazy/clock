var hourEl = document.querySelector(".hour")
var minuteEl = document.querySelector(".minute")
var secondEl = document.querySelector(".second")
var timeEl = document.querySelector(".time")
var dateEl = document.querySelector(".date")
var darkModeChanging = document.querySelector(".dark-mode");

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

darkModeChanging.addEventListener("click", darkMode)
function darkMode(e){
    var html = document.querySelector("html")
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML = "Dark Mode"
    }else{
        html.classList.add("dark")
        e.target.innerHTML = "Light Mode"
    }
}

function setTime(){
    var time = new Date()
    // console.log(time)
    var date = time.getDate()
    var month = time.getMonth()
    // console.log(month)
    var day = time.getDay()
    console.log(day)
    var hours = time.getHours()
    // console.log(hours)
    var hoursForClock = hours % 12;
    // console.log(hoursForClock)
    var minutes = time.getMinutes()
    // console.log(minutes)
    var seconds = time .getSeconds()
    // console.log(seconds) 
    var amPm = hours >= 12 ? "PM" :"AM";
    var showThis = Math.random(2);
    console.log(showThis)

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${amPm}`;
    dateEl.innerHTML = `${days[day]} , ${months[month]} <span class="date-circle">${date}</span>`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setTime();
setInterval(setTime, 1000)
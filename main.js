let dayOfWeek = document.getElementById("date"); 

let newTime = document.getElementById("localTime")


let DaysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


let n = new Date();

let day = DaysOfTheWeek[n.getDay()]

dayOfWeek.innerHTML = day


let hours = n.getHours();

let minutes = n.getMinutes();

let seconds = n.getSeconds();

newTime.innerHTML = `${hours}:${minutes}:${seconds}`


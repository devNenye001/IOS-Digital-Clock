//A DIGITAL CLOCK

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Converting 24hr to 12hr
  hours = hours % 12;
  hours = hours ? hours : 12; 

  // Adding padding zeros
  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;

  //display values to the DOM
  document.getElementById("hours").textContent = h;
  document.getElementById("minutes").textContent = m;
  document.getElementById("seconds").textContent = s;
  document.getElementById("ampm").textContent = ampm;
}

updateClock();
setInterval(updateClock, 1000);

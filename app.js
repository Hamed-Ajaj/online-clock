

const hourEl = document.querySelector("#hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const switchBtn = document.querySelector(".input");
const elements = document.querySelectorAll('*');
let clockBox = document.querySelector(".clock-box");
const digitalBox = document.querySelector('div .digital-box');
const analogBox = document.querySelector('div .analog-box');
const clock = document.querySelector('.clock');
const digital = document.querySelector('.digital-clock');
const analog = document.querySelector('.analog-clock');
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sec = document.querySelector('#sc');


// Rest of the code...




// ! digital clock code

window.onload = updateClock();
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h+":";
  minuteEl.innerText = m  + ":";
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
switchBtn.addEventListener("click", () => {
    if(switchBtn.checked){
    elements.forEach(function(element) {
        element.classList.add('night');
    });
    }
    else{
        elements.forEach(function(element) {
            element.classList.remove('night');
        });
    }
});

// Function to handle the click event
function handleClick(event) {
  const clickedDiv = event.target.closest('div');
  if (!clickedDiv) return; // Exit if the click was not inside a div element

  // Toggle the "not-active" class for the clicked div
  // clickedDiv.classList.toggle('not-active');

  // Toggle the "not-active" class for the other div
  if (clickedDiv === digitalBox) {
    analogBox.classList.add('not-active');
    digitalBox.classList.remove('not-active');
  } else if (clickedDiv === analogBox) {
    digitalBox.classList.add('not-active');
    analogBox.classList.remove('not-active');
  }
}

// Add click event listener to the parent div
clockBox.addEventListener('click', handleClick);

digitalBox.addEventListener('click', () => {
  digital.classList.add('show');
  analog.classList.remove('show');
})
analogBox.addEventListener('click', () => {
  analog.classList.add('show');
  digital.classList.remove('show');
})

// ! analog clock code


setInterval(() => {
  let date = new Date();
  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * deg;
  let ss = date.getSeconds() * deg;
  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`; 
  sec.style.transform = `rotateZ(${ss}deg)`;
})


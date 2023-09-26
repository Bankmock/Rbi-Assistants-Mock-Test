const countdownMinutes = 20;
const countdownSeconds = 0;

let time = countdownMinutes * 60 + countdownSeconds;
let timerElement = document.getElementById("timer");
let countdownInterval;

// Function to update the timer
function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  timerElement.textContent = `Left Time: ${padNumber(minutes)}:${padNumber(seconds)}`;

  if (time === 0) {
    clearInterval(countdownInterval);
    
    doSomething();
  } else {
    time--;
  }
}

// Function to pad numbers with leading zeros (e.g., 1 -> 01)
function padNumber(number) {
  return number.toString().padStart(2, "0");
}



// Start the countdown
countdownInterval = setInterval(updateTimer, 1000);




function doSomething() {
      document.getElementById("regForm").submit() 
     
	 
 
 
}

      

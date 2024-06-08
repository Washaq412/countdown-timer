const daysInput = document.getElementById('days');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

const daysValue = document.getElementById('days-value');
const hoursValue = document.getElementById('hours-value');
const minutesValue = document.getElementById('minutes-value');
const secondsValue = document.getElementById('seconds-value');

const startBtn = document.getElementById('start-btn');

let countdown;
let targetDate;

function updateTimer() {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  // Handle negative diff (countdown finished)
  if (diff <= 0) {
    clearInterval(countdown);
    daysValue.textContent = hoursValue.textContent = minutesValue.textContent = secondsValue.textContent = '00';
    alert('Countdown finished!');
    return;
  }

  // Calculate remaining time
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)));
}

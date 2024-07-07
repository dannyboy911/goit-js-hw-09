// import flatpickr from "flatpickr";

// import Notiflix from "notiflix";



const dateTimeSetter = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let countDownDisplay;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
      if (selectedDates[0] <= new Date()) {
          Notiflix.Notify.failure("Please choose a date from the future");
          startButton.disabled = true;
      } else {
          startButton.disabled = false;
      }
  },
};

flatpickr(dateTimeSetter, options);

startButton.addEventListener('click', () => {
    const setDate = new Date(dateTimeSetter.value);
    clearInterval(countDownDisplay);
    countDownDisplay = setInterval(() => {
        const now = new Date();
        const timeRemaining = setDate - now;
        if (timeRemaining <= 0) {
            clearInterval(countDownDisplay);
            updateDisplay(0, 0, 0, 0);
        } else {
            const { days, hours, minutes, seconds } = convertMs(timeRemaining);
            updateDisplay(days, hours, minutes, seconds);
        }
        
    }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addZeroBefore(value) {
    return String(value).padStart(2, '0');
};

function updateDisplay(days, hours, minutes, seconds) {
    daysEl.textContent = addZeroBefore(days);
    hoursEl.textContent = addZeroBefore(hours);
    minutesEl.textContent = addZeroBefore(minutes);
    secondsEl.textContent = addZeroBefore(seconds);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyBackground = document.querySelector('body');
const startChangingColors = document.querySelector('[data-start]');
const stopChangingColors = document.querySelector('[data-stop]');
let colorChangeDelay = null;

startChangingColors.addEventListener('click', () => {
    startChangingColors.disabled = true;
    stopChangingColors.disabled = false;

    colorChangeDelay = setInterval(() => {
        bodyBackground.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopChangingColors.addEventListener('click', () => {
    stopChangingColors.disabled = true;
    startChangingColors.disabled = false;

    clearInterval(colorChangeDelay);
});


const bodyBackground = document.querySelector('body');
const startChangingColors = document.querySelector('[data-start]');
const stopChangingColors = document.querySelector('[data-stop]');
const myParagraph = document.querySelector('#myParagraph a');
let colorChangeDelay = null;

startChangingColors.addEventListener('click', () => {
    startChangingColors.disabled = true;
    stopChangingColors.disabled = false;
    myParagraph.style.visibility = 'hidden';
        colorChangeDelay = setInterval(() => {
        bodyBackground.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopChangingColors.addEventListener('click', () => {
    stopChangingColors.disabled = true;
    startChangingColors.disabled = false;
    myParagraph.style.visibility = 'visible';
        clearInterval(colorChangeDelay);
});


    
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
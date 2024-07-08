

const bodyBackground = document.querySelector('body');
const startChangingColors = document.querySelector('[data-start]');
const stopChangingColors = document.querySelector('[data-stop]');
const myParagraph = document.querySelector('#myParagraph a');
let colorChangeDelay = null;

function changeColors() {
    startChangingColors.disabled = true;
    stopChangingColors.disabled = false;
    myParagraph.style.visibility = 'hidden';
        colorChangeDelay = setInterval(() => {
        bodyBackground.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function haltColors() {
    stopChangingColors.disabled = true;
    startChangingColors.disabled = false;
    myParagraph.style.visibility = 'visible';
        clearInterval(colorChangeDelay);
}

startChangingColors.addEventListener('click', changeColors);
stopChangingColors.addEventListener('click', haltColors);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};




    

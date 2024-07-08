import Notiflix from "notiflix";

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const spinner = document.getElementById('spinner');

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  spinner.style.display = 'block';

  const delay = Number(event.target.delay.value);
  const step = Number(event.target.step.value);
  const amount = Number(event.target.amount.value);

  let completedPromises = 0;
  let fulfilledPromises = 0;
  let rejectedPromises = 0;

  for (let i = 1; i <= amount; i++) {
    const currentDelay = delay + (i - 1) * step;
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        fulfilledPromises++;
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        rejectedPromises++;
      })
      .finally(() => {
        completedPromises++;
        if (completedPromises === amount) {
          spinner.style.display = 'none';
          Notiflix.Notify.info(`Summary: ${fulfilledPromises} fulfilled, ${rejectedPromises} rejected`);
        }
      });
  }
});


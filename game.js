const clickButton = document.querySelector('#clic');
const scoreDisplay = document.querySelector('#affichage');
let score = 0;

const incrementAndDisplayScore = () => {
  score += multiplicateur;
  scoreDisplay.innerHTML = score;
};

clickButton.addEventListener('click', incrementAndDisplayScore);

const multiplierButton = document.querySelector('#multiplier');
let multiplicateur = 1;
let multiplicateurPrice = 50;
const augmenterMultiplicateur = () => {
  if (score >= multiplicateurPrice) {
    multiplicateur++;
    score -= multiplicateurPrice;
    multiplicateurPrice *= 2;
    scoreDisplay.innerHTML = score;
    multiplierButton.innerHTML = `Multiplicateur x${multiplicateur}. Prix : ${multiplicateurPrice} clics.`;
  }
};

multiplierButton.addEventListener('click', augmenterMultiplicateur);

const autoClickButton = document.querySelector('#autoclic');
const autoClick = () => {
  if (score >= 10) {
    score -= 10;
    const autoClicker = setInterval(incrementAndDisplayScore, 1000);
  }
  autoClickButton.removeEventListener('click', autoClick);
  autoClickButton.style.opacity = '0.5';
}
autoClickButton.addEventListener('click', autoClick);

const bonusButton = document.querySelector('#bonus');
const bonusEvent = () => {
  if (score >= 5000) {
    score -= 5000;
    scoreDisplay.innerHTML = score;
    bonusButton.removeEventListener('click', bonusEvent);
    bonusButton.style.opacity = '0.5';
    let countDown = 29;
    multiplicateur *= 2;
    const countDownInterval = setInterval(() => bonusButton.innerHTML = countDown--, 1000);
    setTimeout(() => {
      multiplicateur /= 2;
      clearInterval(countDownInterval);
      bonusButton.innerHTML = 'BONUS';
      bonusButton.style.opacity = '1';
      bonusButton.addEventListener('click', bonusEvent);
    }, 30000);
  }
}
bonusButton.addEventListener('click', bonusEvent);

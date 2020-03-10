import gameEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  const firstNumber = (Math.floor(Math.random()*100) + 1);
  const secondNumber = (Math.floor(Math.random()*100) + 1);
  const gcd = (m, n) => {
    if (m === n) {
      return m;
    }
    if (m > n) {
      return gcd(m - n, n)
    }
    return gcd(m, n - m);
  };
  const correctAnswer = gcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

gameEngine(description, gcd);

export default () => gameEngine(description, gcd);

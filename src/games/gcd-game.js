import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gcd = (m, n) => {
  if (m === n) {
    return m;
  }

  if (m > n) {
    return gcd(m - n, n);
  }

  return gcd(m, n - m);
};

const description = 'Find the greatest common divisor of given numbers.';
const getDataForGcdGame = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const correctAnswer = gcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, getDataForGcdGame);

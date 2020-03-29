import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';
import gcd from '../gcd.js';

const description = 'Find the greatest common divisor of given numbers.';
const findGcd = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const correctAnswer = gcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, findGcd);

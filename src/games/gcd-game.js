import gameEngine from '../index.js';
import { generateRandomNumber, gcd } from '../commonFunc.js';

const description = 'Find the greatest common divisor of given numbers.';
const findGcd = () => {
  const firstNumberRange = 100,
        secondNumberRange = 100,
        firstNumber = generateRandomNumber(firstNumberRange),
        secondNumber = generateRandomNumber(secondNumberRange),
        correctAnswer = gcd(firstNumber, secondNumber),
        question = `${firstNumber} ${secondNumber}`,
        gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, findGcd);

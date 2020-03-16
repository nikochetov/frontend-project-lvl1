import gameEngine from '../index.js';
import { generateRandomNumber, isPrime } from '../commonFunc.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const checkForPrime = () => {
  const randomNumberRange = 100,
        randomNumber = generateRandomNumber(randomNumberRange),
        correctAnswer = isPrime(randomNumber) === true ? 'yes' : 'no',
        gameData = [randomNumber, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, checkForPrime);

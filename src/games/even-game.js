import gameEngine from '../index.js';
import { generateRandomNumber } from '../commonFunc.js';

const description = 'Answer "yes" if the number is even, otherwhise answer "no".'
const checkForEven = () => {
  const randomNumberRange = 100,
        randomNumber = generateRandomNumber(randomNumberRange),
        correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no',
        gameData = [randomNumber, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, checkForEven);

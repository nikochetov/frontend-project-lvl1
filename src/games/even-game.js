import { generateRandomNumber } from '../random.js';
import gameEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwhise answer "no".'
const checkForEven = () => {
  const randomNumber = generateRandomNumber();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const gameData = [randomNumber, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, checkForEven);

import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwhise answer "no".';
const getDataForEvenGame = () => {
  const question = generateRandomNumber(0, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, getDataForEvenGame);

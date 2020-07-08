import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwhise answer "no".';
const getDataForEvenGame = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, getDataForEvenGame);

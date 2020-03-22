import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwhise answer "no".';
const genEvenNum = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const gameData = [randomNumber, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, genEvenNum);

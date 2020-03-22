import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';
const makeProgression = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const unknownNumber = generateRandomNumber(0, 10);
  let collOfNumbers = [];
  const progressionLength = 10;
  for (let i = randomNumber; i < randomNumber + progressionLength; i += 1) {
    collOfNumbers.push(i);
  };

  const correctAnswer = collOfNumbers[unknownNumber];
  collOfNumbers[unknownNumber] = '..';
  const nums = collOfNumbers.join(' ');
  const question = `${nums}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, makeProgression);

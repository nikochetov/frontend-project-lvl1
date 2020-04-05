import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const makeProgression = (progressionStep, progressionBegin, progressionLength) => {
  const progression = [];
  progression.push(progressionBegin);
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progressionBegin + (progressionStep * i));
  };

  return progression;
};

const description = 'What number is missing in the progression?';
const getDataForProgressionGame = () => {
  const progressionLength = 10;
  const progressionStep = generateRandomNumber(1, 9);
  const progressionBegin = generateRandomNumber(1, 100);
  const unknownNumberIndex = generateRandomNumber(1, progressionLength - 1);
  const progression = makeProgression(progressionStep, progressionBegin, progressionLength);
  const correctAnswer = progression[unknownNumberIndex];
  progression[unknownNumberIndex] = '..';
  const question = progression.join(' ');
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, getDataForProgressionGame);

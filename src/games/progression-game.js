import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';
const makeProgression = () => {
  const progressionBegin = generateRandomNumber(1, 90);
  const unknownNumber = generateRandomNumber(1, 8);
  const progression = [];
  const progressionLength = 10;
  const progressionStep = 1;
  for (let i = progressionBegin; i < progressionBegin + progressionLength; i += progressionStep) {
    progression.push(i);
  };

  const correctAnswer = progression[unknownNumber];
  progression[unknownNumber] = '..';
  const nums = progression.join(' ');
  const question = `${nums}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, makeProgression);

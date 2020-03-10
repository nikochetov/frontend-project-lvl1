import gameEngine from '../index.js';

const description = 'What number is missing in the progression?';
const progression = () => {
  const randomNumber = (Math.floor(Math.random()*100 ) + 1);
  const unknownNumber = (Math.floor(Math.random()*10 ) + 1);
  let collOfNumbers = [];
  for (let i = randomNumber; i <= randomNumber + 10; i += 1) {
    collOfNumbers.push(i);
  };
  const correctAnswer = collOfNumbers[unknownNumber];
  collOfNumbers[unknownNumber] = '..';
  const nums = collOfNumbers.join(' ');
  const question = `${nums}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

gameEngine(description, progression)

export default () => gameEngine(description, progression);

import workFlow from '../index.js';

const description = 'Answer "yes" if the number is even, otherwhise answer "no".'
const evenOrNot = () => {
  const randomNumber = (Math.floor(Math.random()*100) + 1);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = randomNumber;
  const gameData = [question, correctAnswer];
  return gameData;
};

workFlow(description, evenOrNot);

export default () => workFlow(description, evenOrNot);

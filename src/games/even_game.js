import readlineSync from 'readline-sync';
import {name} from './auth.js';

const evenOrNot = () => {
  console.log('Answer "yes" if the number is even, otherwhise answer "no".')
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (Math.floor(Math.random()*100) + 1);
    const isEven = randomNumber % 2 === 0;
    const isNotEven = randomNumber  % 2 !== 0;
    console.log('Question: ', randomNumber);
    const answer = readlineSync.question('Your answer: ');
    if ((isEven && answer === 'yes') || (isNotEven && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer`);
      break;
    }
  }
  console.log(`Congratulations!, ${name}`)
};
evenOrNot();

export default evenOrNot;

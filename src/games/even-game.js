import readlineSync from 'readline-sync';
import {name} from '../greeting.js'

const evenOrNot = () => {
  console.log('Answer "yes" if the number is even, otherwhise answer "no".')
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (Math.floor(Math.random()*100) + 1);
    const result = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log('Question: ', randomNumber);
    const answer = readlineSync.question('Your answer: ');

    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
      break;
    }
  }
  console.log(`Congratulations!, ${name}`)
};

export default evenOrNot;

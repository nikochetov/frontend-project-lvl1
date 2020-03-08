import readlineSync from 'readline-sync';
import {name} from '../greeting.js'

const primeOrNot = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (Math.floor(Math.random()*100) + 1);
    const isPrime = (num) => {
      if (num <= 1) {
        return false;
      }
      let i = 2;
      while (i <= num / 2) {
        if (num % i === 0) {
          return false;
        }
      i += 1;
      }
      return true;
    }
    const result = isPrime(randomNumber) === true ? 'yes' : 'no';
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

export default primeOrNot;

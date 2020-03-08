import readlineSync from 'readline-sync';
import {name} from '../greeting.js'

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = (Math.floor(Math.random()*100) + 1);
    const secondOperand = (Math.floor(Math.random()*100) + 1);
    console.log('Question: ', `${firstOperand} ${secondOperand}`);

    const gcd = (m, n) => {
      if (m === n) {
        return m;
      }
      if (m > n) {
        return gcd(m - n, n)
      }
      return gcd(m, n - m);
    }
    const result = gcd(firstOperand, secondOperand);
    const answer = Number(readlineSync.question('Your answer: '));
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
      break;
    }
  }
  console.log(`Congratulations!, ${name}`)
};

export default gcd;

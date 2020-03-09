import workFlow from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const primeOrNot = () => {
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
  };
  const result = isPrime(randomNumber) === true ? 'yes' : 'no';
  const question = randomNumber;
};

workFlow(description, primeOrNot);

export default () => workFlow(description, primeOrNot);

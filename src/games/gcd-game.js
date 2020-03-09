import workFlow from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  const firstNumber = (Math.floor(Math.random()*100) + 1);
  const secondNumber = (Math.floor(Math.random()*100) + 1);
  const gcd = (m, n) => {
    if (m === n) {
      return m;
    }
    if (m > n) {
      return gcd(m - n, n)
    }
    return gcd(m, n - m);
  };
  const result = gcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
};

workFlow(description, gcd);

export default () => workFlow(description, gcd);

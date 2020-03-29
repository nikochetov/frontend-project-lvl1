import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkForPrime = () => {
  const question = generateRandomNumber(0, 100);
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

  const correctAnswer = isPrime(randomNumber) === true ? 'yes' : 'no';
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, checkForPrime);

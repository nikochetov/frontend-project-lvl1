import readlineSync from 'readline-sync';
import {name} from '../greeting.js'

const progression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (Math.floor(Math.random()*100 ) + 1);
    const randomNumber2 = (Math.floor(Math.random()*10 ) + 1);
    let arr = [];
    for (let j = randomNumber; j <= randomNumber + 10; j += 1) {
      arr.push(j);
    }
    const result = arr[randomNumber2];
    arr[randomNumber2] = '..';
    const nums = arr.join(' ');
    console.log('Question: ', `${nums}`);
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

export default progression;

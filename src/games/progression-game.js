import workFlow from '../index.js';

const description = 'What number is missing in the progression?';
const progression = () => {
  const randomNumber = (Math.floor(Math.random()*100 ) + 1);
  const randomNumber2 = (Math.floor(Math.random()*10 ) + 1);
  let arr = [];
  for (let i = randomNumber; i <= randomNumber + 10; i += 1) {
    arr.push(i);
  };
  const result = arr[randomNumber2];
  arr[randomNumber2] = '..';
  const nums = arr.join(' ');
  const question = `${nums}`;
};

workFlow(description, progression)

export default () => workFlow(description, progression);

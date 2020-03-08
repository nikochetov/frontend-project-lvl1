import readlineSync from 'readline-sync';
import {name} from '../greeting.js'

const calc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = (Math.floor(Math.random()*100 / 2) + 1);
    const secondOperand = (Math.floor(Math.random()*10) + 1);

    const randomOperator = () => {
      let operator = "";
      const possible = "+-*";
      for(let i = 0; i < 1; i += 1) {
        operator += possible.charAt(Math.floor(Math.random() * possible.length));
      }
    console.log('Question: ', `${firstOperand} ${operator} ${secondOperand}`);
    return operator;
    };

    let result = 0;
      switch (randomOperator()) {
        case '*':
          result = firstOperand * secondOperand;
        break;
        case '-':
          result = firstOperand - secondOperand;
        break;
        default:
          result = firstOperand + secondOperand;
      }
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

export default calc;

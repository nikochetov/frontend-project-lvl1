import workFlow from '../index.js';

const description = 'What is the result of the expression?';
const randomCalculate = () => {
  const firstOperand = (Math.floor(Math.random()*100 / 2) + 1);
  const secondOperand = (Math.floor(Math.random()*10) + 1);
  let operator = "";
  const possible = "+-*";
  for(let i = 0; i < 1; i += 1) {
    operator += possible.charAt(Math.floor(Math.random() * possible.length));
  };
  let result = 0;
    switch (operator) {
      case '*':
        result = firstOperand * secondOperand;
      break;
      case '-':
        result = firstOperand - secondOperand;
      break;
      default:
        result = firstOperand + secondOperand;
    };
  const question = `${firstOperand} ${operator} ${secondOperand}`;
};

workFlow(description, randomCalculate)

export default () => workFlow(description, randomCalculate);

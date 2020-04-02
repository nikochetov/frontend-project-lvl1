import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const getOperator = () => {
  const operators = '+-*';
  const lastOperatorIndex = operators.length - 1;
  const randomOperatorIndex = generateRandomNumber(0, lastOperatorIndex);
  const operator = operators[randomOperatorIndex];
  return operator;
};

const calculate = (firstOperand, secondOperand, operator) => {
  let result;
  switch (operator) {
    case '*':
      result = firstOperand * secondOperand;
    break;
    case '-':
      result = firstOperand - secondOperand;
    break;
    case '+':
      result = firstOperand + secondOperand;
    break;
  };
  return result;
};

const description = 'What is the result of the expression?';
const getDataForCalcGame = () => {
  const firstOperand = generateRandomNumber(1, 100);
  const secondOperand = generateRandomNumber(1, 20);
  const operator = getOperator();
  const correctAnswer = calculate(firstOperand, secondOperand, operator);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, getDataForCalcGame);

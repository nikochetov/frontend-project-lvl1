import gameEngine from '../index.js';
import { generateRandomNumber } from '../commonFunc.js';

const description = 'What is the result of the expression?';
const randomCalculate = () => {
  const firstOperandRange = 100,
        secondOperandRange = 20,
        firstOperand = generateRandomNumber(firstOperandRange),
        secondOperand = generateRandomNumber(secondOperandRange);
  const possibleOperator = '+-*';
  const index = Math.floor(Math.random() * possibleOperator.length);
  const operator = possibleOperator[index];
  let correctAnswer;
  if (operator === '*') {
    correctAnswer = firstOperand * secondOperand;
  }
  if (operator === '-') {
    correctAnswer = firstOperand - secondOperand;
  }
  if (operator === '+') {
    correctAnswer = firstOperand + secondOperand;
  }
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const gameData = [question, correctAnswer];
  return gameData;
};


export default () => gameEngine(description, randomCalculate);

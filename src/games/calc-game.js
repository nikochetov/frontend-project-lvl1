import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';
const randomCalculate = () => {
  const firstOperand = generateRandomNumber(0, 100);
  const secondOperand = generateRandomNumber(0, 20);
  const possibleOperator = '+-*';
  const index = Math.floor(Math.random() * possibleOperator.length);
  const operator = possibleOperator[index];
  let correctAnswer;
  switch (operator) {
    case '*':
      correctAnswer = firstOperand * secondOperand;
    break;
    case '-':
      correctAnswer = firstOperand - secondOperand;
    break;
    case '+':
      correctAnswer = firstOperand + secondOperand;
    break;
  };
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, randomCalculate);

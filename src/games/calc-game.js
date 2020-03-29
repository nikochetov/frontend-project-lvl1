import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';
const randomCalculate = () => {
  const firstOperand = generateRandomNumber(0, 100);
  const secondOperand = generateRandomNumber(0, 20);
  const possibleOperator = '+-*';
  const index = generateRandomNumber(0, 2);
  const operators = possibleOperator[index];
  let correctAnswer;
  switch (operators) {
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
  const question = `${firstOperand} ${operators} ${secondOperand}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => gameEngine(description, randomCalculate);

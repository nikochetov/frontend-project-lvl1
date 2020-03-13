export const generateRandomNumber = () => {
  const randomNumber = (Math.floor(Math.random()*100) + 1);
  return randomNumber;
}

export const generateOperands = () => {
  const firstOperand = (Math.floor(Math.random()*100 / 2) + 1);
  const secondOperand = (Math.floor(Math.random()*10) + 1);
  const operands = [firstOperand, secondOperand];
  return operands;
}

import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
console.log(greeting);

const gameEngine = (description, getGameData) => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + playerName);
  console.log(description);
  const attemptQuantity = 3;
  for (let attemptCount = 1; attemptCount <= attemptQuantity; attemptCount += 1) {
    const [question, correctAnswer] = getGameData();
    console.log('Question: ', question);
    const userResponse = readlineSync.question('Your answer: ');
    if (correctAnswer == userResponse) {
      console.log('Correct!');
    } else {
      console.log(`"${userResponse}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations!, ${playerName}`);
};

export default gameEngine;

import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
console.log(greeting);

const gameEngine = (description, getGameData) => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + playerName);
  console.log(description);
  const attempts = 3;
  for (let attemptCount = 0; attemptCount < attempts; attemptCount += 1) {
    const [question, correctAnswer] = getGameData();
    console.log('Question: ', question);
    const userResponse = readlineSync.question('Your answer: ');
    if (correctAnswer == userResponse) {
      console.log('Correct!');
      if (attemptCount === attempts) {
        console.log(`Congratulations!, ${playerName}`);
      }

    } else {
      console.log(`"${userResponse}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${playerName}`);
      break;
    }
  }
};

export default gameEngine;

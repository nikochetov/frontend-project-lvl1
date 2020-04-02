import readlineSync from 'readline-sync';

const gameEngine = (description, getGameData) => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const playerName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + playerName);
  console.log(description);
  const attemptsCount = 3;
  for (let i = 1; i <= attemptsCount; i += 1) {
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

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const playerName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + playerName);

const workFlow = (description, getGameData) => {
  console.log(description);
  const attempts = 3;
  let attemptCount = 0;
  while (attemptCount < attempts) {
    const [question, correctAnswer] = getGameData();
    console.log('Question: ', question);
    const userResponse = readlineSync.question('Your answer: ');
    if (correctAnswer == userResponse) {
      console.log('Correct!');
      attemptCount += 1;
    } else {
      console.log(`"${userResponse}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      break;
    }
  };
  if (attemptCount === 3) {
    console.log(`Congratulations!, ${playerName}`);
  } else {
    console.log(`Let's try again, ${playerName}`);
  }
};

export default core;

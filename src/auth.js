import readlineSync from 'readline-sync';

const auth = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name);
};
auth();}


export default auth;

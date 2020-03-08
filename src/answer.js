import readlineSync from 'readline-sync';
import * as evenGame from './games/even_game.js';
const num = evenGame.randomNumber;

export const question = console.log('Question: ', num);
export const answer = readlineSync.question('Your answer: ');

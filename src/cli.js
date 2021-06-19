// Приветствие игрока
import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('May I have your name?');

  // так считываем введеное имя
  const name = readlineSync.question('Your answer: ');

  console.log(`Hello, ${name}!`);

  return name;
};

export const getAnswer = () => readlineSync.question('Your answer: ');

// Приветствие игрока
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');

  // так считываем введеное имя
  const name = readlineSync.question('Your answer: ');

  console.log(`Hello, ${name}!`);

  return name;
};

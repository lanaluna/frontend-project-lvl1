// Игра на четность
import { getName, getAnswer } from './cli.js';
import randomNumber from './randomNumber.js';
import checkEven from './checkEven.js';

console.log('Welcome to the Brain Games!');

const name = getName(); // поприветствуем игрока

// функция задает три вопроса
const threeQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    const givenNumber = randomNumber(100);
    console.log(`Question: ${givenNumber}`);
    const answer = getAnswer();
    const isEven = checkEven(givenNumber);

    if (isEven === answer) {
      console.log('Correct!');
    } else {
      return { final: 'fail', answer, isEven };
    }
  }

  return { final: 'success' };
};

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const final = threeQuestions();

  if (final.final === 'success') {
    console.log(`Congratulations, ${name}!`);
    return true;
  }

  console.log(`'${final.answer}' is wrong answer ;(. Correct answer was '${final.isEven}'.`);
  console.log(`Let's try again, ${name}!`);

  return false;
};

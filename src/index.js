import { getName, getAnswer } from './cli.js';
import showRules from './showRules.js';
import * as calc from './calcGame.js';

// сама игра
const gameFlow = (game) => {
  // поприветствуем игрока, запоминаем имя
  const name = getName();

  // просто выводим правила игры
  showRules(game);

  // цикл из трех вопросов
  // возвращаем в объекте статус игры (прошел или не прошел) и имя
  // если игрок ошибся, то также возвращаем правильный и неправильный ответ
  for (let i = 0; i < 3; i += 1) {
    const gameAnswer = calc.giveQuestion();
    const playerAnswer = getAnswer();

    if (calc.isAnswerWrong(playerAnswer, gameAnswer)) {
      return {
        status: 'fail', playerAnswer, gameAnswer, name,
      };
    }
  }

  return { status: 'success', name };
};

// вызов игры
export default (game) => {
  console.log('Welcome to the Brain Games!');
  const resultObject = gameFlow(game);

  if (resultObject.status === 'success') {
    console.log(`Congratulations, ${resultObject.name}!`);
    return true;
  }

  console.log(`'${resultObject.playerAnswer}' is wrong answer ;(. Correct answer was '${resultObject.gameAnswer}'.`);
  console.log(`Let's try again, ${resultObject.name}!`);

  return false;
};

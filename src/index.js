import { getName, getAnswer } from './cli.js';
import showRules from './showRules.js';
import calc from './calcGame.js';
import gcd from './gcdGame.js';
import isWrongAnswer from './isWrongAnswer.js';

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
    let gameAnswer;

    // если это игра калькулатор
    if (game === 'calc') {
      gameAnswer = calc();
    }

    // если это игра наибольший общий делитель
    if (game === 'gcd') {
      gameAnswer = gcd();
    }

    // получаем ответ игрока
    const playerAnswer = getAnswer();

    // проверяем равны ли ответы
    if (isWrongAnswer(playerAnswer, gameAnswer)) {
      return {
        status: 'fail', playerAnswer, gameAnswer, name,
      };
    }
  }

  // общий возврат для всех игр в случае успеха (потому что он одинаковый: статус и имя, и все)
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

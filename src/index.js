import { getName, getAnswer } from './cli.js';
import showRules from './showRules.js';
import even from './games/evenGame.js';
import calc from './games/calcGame.js';
import gcd from './games/gcdGame.js';
import progression from './games/progressionGame.js';
import prime from './games/primeGame.js';
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

    // выбор игры (игра задает вопрос и запоминает ответ)
    switch (game) {
      case 'gcd': // если это игра наибольший общий делитель
        gameAnswer = gcd();
        break;
      case 'progression': // если это игра прогрессия
        gameAnswer = progression();
        break;
      case 'prime': // если это игра простое число
        gameAnswer = prime();
        break;
      case 'even': // если это игра на четность
        gameAnswer = even();
        break;
      default:
        gameAnswer = calc(); // по умолчанию игра калькулятор
    }

    // получаем ответ игрока
    let playerAnswer = getAnswer();

    // для тех игр, где ответ игрока предполагает число, принудительно переводим ответ в число
    if (game === 'gcd' || game === 'calc' || game === 'progression') {
      playerAnswer = Number(playerAnswer);
    }

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

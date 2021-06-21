import randomNumber from '../randomNumber.js';

export default () => {
  const num1 = randomNumber(100);
  const num2 = randomNumber(100);
  const sign = randomNumber(3);

  let gameAnswer;

  switch (sign) {
    case 0: // плюс
      gameAnswer = Number(num1) + Number(num2);
      console.log(`Question: ${num1} + ${num2}`);
      break;
    case 1: // минус
      gameAnswer = Number(num1) - Number(num2);
      console.log(`Question: ${num1} - ${num2}`);
      break;
    default: // умножить
      gameAnswer = Number(num1) * Number(num2);
      console.log(`Question: ${num1} * ${num2}`);
  }

  return gameAnswer;
};

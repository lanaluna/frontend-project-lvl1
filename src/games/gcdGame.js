import randomNumber from '../randomNumber.js';

const findGCD = (a, b) => {
  if (a === b) {
    return a; // если числа равны, то НОД равно числу
  }

  let min = a;
  let max = b;

  if (a > b) {
    min = b;
    max = a;
  }

  for (let i = min; i > 1; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }

  return 1; // НОД = 1
};

export default () => {
  const num1 = randomNumber(100);
  const num2 = randomNumber(100);

  console.log(`Question: ${num1} ${num2}`);

  return findGCD(num1, num2);
};

import randomNumber from '../randomNumber.js';

const checkIsNumberSimple = (num) => {
  if (num === 1) {
    return 'no';
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default () => {
  const gameNumber = randomNumber(100);
  console.log(`Question: ${gameNumber}`);
  return checkIsNumberSimple(gameNumber);
};

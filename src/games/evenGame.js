// Игра на четность
import randomNumber from '../randomNumber.js';

export default () => {
  const givenNumber = randomNumber(100);
  console.log(`Question: ${givenNumber}`);

  if (givenNumber % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

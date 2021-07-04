import randomNumber from '../randomNumber.js';

const generateProgression = () => {
  const progression = [];
  const progressionStep = randomNumber(10);
  let progressionItem = randomNumber(100);
  progression.push(progressionItem); // первый член прогрессии

  // остальные 9 членов прогрессии
  for (let i = 1; i < 10; i += 1) {
    progressionItem += progressionStep;
    progression.push(progressionItem);
  }

  return progression;
};

export default () => {
  const progression = generateProgression();
  const posOfHiddenNumber = randomNumber(10);
  const shownProgression = [...progression]; // создали копию массива
  shownProgression[posOfHiddenNumber] = '..'; // скрыли число

  console.log(`Question: ${shownProgression.join(' ')}`);

  return progression[posOfHiddenNumber]; // возвращаем то число, которое скрыли
};

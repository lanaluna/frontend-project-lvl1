export default (game) => {
  switch (game) {
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    default:
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
};

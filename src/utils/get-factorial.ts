import { ERROR_MESSAGE_FACTORIAL } from '../constants';

export const getFactorial = (value: number): number => {
  if (value < 0) {
    alert(ERROR_MESSAGE_FACTORIAL);

    return value;
  }

  let result: number = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }

  return result;
};

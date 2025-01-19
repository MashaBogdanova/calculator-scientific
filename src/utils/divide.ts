import { ERROR_MESSAGE_DIVIDE } from '../constants/constants';

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    alert(ERROR_MESSAGE_DIVIDE);

    return a;
  }

  return a / b;
};

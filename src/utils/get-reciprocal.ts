import { ERROR_MESSAGE_DIVIDE } from '../constants/constants';

export const getReciprocal = (a: number) => {
  if (a === 0) {
    alert(ERROR_MESSAGE_DIVIDE);

    return a;
  }

  return 1 / a;
};

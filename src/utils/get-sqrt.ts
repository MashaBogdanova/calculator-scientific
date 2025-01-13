import { ERROR_MESSAGE_SQRT } from '../constants';

export function getSqrt(value: number): number {
  if (value < 0) {
    alert(ERROR_MESSAGE_SQRT);

    return value;
  }

  return value ** (1 / 2);
}

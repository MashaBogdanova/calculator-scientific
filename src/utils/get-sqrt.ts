import { ERROR_MESSAGE_SQRT } from '../constants';

export function getSqrt(value: number): number | undefined {
  if (value < 0) {
    alert(ERROR_MESSAGE_SQRT);

    return;
  }

  if (value === 0) return 0;

  let guess = value / 2 || 1;
  let iterations = 20;

  while (iterations--) {
    guess = 0.5 * (guess + value / guess);
  }

  return guess;
}

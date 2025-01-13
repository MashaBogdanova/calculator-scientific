import {
  ERROR_MESSAGE_NTH_ROOT,
  ERROR_MESSAGE_NTH_ROOT_NEGATIVE_DEGREE,
} from '../constants';

export function getNthRoot(a: number, b: number): number {
  if (a < 0 && b % 2 === 0) {
    alert(ERROR_MESSAGE_NTH_ROOT);

    return a;
  }

  if (b <= 0) {
    alert(ERROR_MESSAGE_NTH_ROOT_NEGATIVE_DEGREE);

    return a;
  }

  return a ** (1 / b);
}

import {
  ERROR_MESSAGE_NTH_ROOT,
  ERROR_MESSAGE_NTH_ROOT_NEGATIVE_DEGREE,
} from '../constants/constants';

export function getNthRoot(a: number, b: number): number {
  if (a < 0 && b % 2 === 0) {
    alert(ERROR_MESSAGE_NTH_ROOT);

    return a;
  }

  if (b <= 0) {
    alert(ERROR_MESSAGE_NTH_ROOT_NEGATIVE_DEGREE);

    return a;
  }

  if (a < 0) {
    return -1 * (-a) ** (1 / b);
  } else {
    return a ** (1 / b);
  }
}

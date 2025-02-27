import { ZERO_PREFIXED_VALUES_REGEXP } from '../constants/constants';

export function isNotZeroPrefixed(value: string) {
  return ZERO_PREFIXED_VALUES_REGEXP.test(value);
}

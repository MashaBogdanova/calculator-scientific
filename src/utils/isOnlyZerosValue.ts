import { ONLY_ZEROS_VALUES_REGEXP } from '../constants/constants';

export function isOnlyZerosValue(value: string) {
  return ONLY_ZEROS_VALUES_REGEXP.test(value);
}

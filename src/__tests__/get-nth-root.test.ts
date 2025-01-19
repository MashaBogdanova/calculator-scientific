import {
  ERROR_MESSAGE_NTH_ROOT,
  ERROR_MESSAGE_NTH_ROOT_NEGATIVE_DEGREE,
} from '../constants/constants';
import { getNthRoot } from '../utils/get-nth-root';

global.alert = jest.fn();

describe('getNthRoot', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the nth root of a positive number for a valid degree', () => {
    expect(getNthRoot(27, 3)).toBe(3);
    expect(getNthRoot(16, 4)).toBe(2);
  });

  it('should alert and return a when a is negative and b is even', () => {
    const result = getNthRoot(-16, 2);

    expect(global.alert).toHaveBeenCalledWith(ERROR_MESSAGE_NTH_ROOT);
    expect(result).toBe(-16);
  });

  it('should correctly calculate the nth root for a negative base and odd degree', () => {
    expect(getNthRoot(-27, 3)).toBe(-3);
  });

  it('should alert and return a when degree b is zero', () => {
    const result = getNthRoot(16, 0);

    expect(global.alert).toHaveBeenCalledWith(
      ERROR_MESSAGE_NTH_ROOT_NEGATIVE_DEGREE
    );
    expect(result).toBe(16);
  });

  it('should alert and return a when degree b is negative', () => {
    const result = getNthRoot(16, -2);

    expect(global.alert).toHaveBeenCalledWith(
      ERROR_MESSAGE_NTH_ROOT_NEGATIVE_DEGREE
    );
    expect(result).toBe(16);
  });

  it('should handle edge case when base a is 0', () => {
    expect(getNthRoot(0, 3)).toBe(0);
  });

  it('should return 1 for any nth root of 1', () => {
    expect(getNthRoot(1, 5)).toBe(1);
    expect(getNthRoot(1, 100)).toBe(1);
  });
});

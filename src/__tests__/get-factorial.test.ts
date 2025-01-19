import { ERROR_MESSAGE_FACTORIAL } from '../constants/constants';
import { getFactorial } from '../utils/get-factorial';

global.alert = jest.fn();

describe('getFactorial', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 1 for factorial of 0', () => {
    expect(getFactorial(0)).toBe(1);
  });

  it('should calculate factorial of a positive number', () => {
    expect(getFactorial(5)).toBe(120);
    expect(getFactorial(3)).toBe(6);
  });

  it('should alert and return the value for negative numbers', () => {
    const negativeValue = -5;
    const result = getFactorial(negativeValue);

    expect(global.alert).toHaveBeenCalledWith(ERROR_MESSAGE_FACTORIAL);
    expect(result).toBe(negativeValue);
  });

  it('should handle large numbers correctly', () => {
    expect(getFactorial(10)).toBe(3628800);
  });

  it('should return 1 for factorial of 1', () => {
    expect(getFactorial(1)).toBe(1);
  });
});

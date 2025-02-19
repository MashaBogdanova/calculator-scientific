import { ERROR_MESSAGE_DIVIDE } from '../constants/constants';
import { getReciprocal } from '../utils/get-reciprocal';

global.alert = jest.fn();

describe('getReciprocal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 1 divided by the number for a non-zero input', () => {
    expect(getReciprocal(4)).toBe(0.25);
    expect(getReciprocal(0.5)).toBe(2);
    expect(getReciprocal(-2)).toBe(-0.5);
  });

  it('should alert and return 0 when input is 0', () => {
    const result = getReciprocal(0);

    expect(global.alert).toHaveBeenCalledWith(ERROR_MESSAGE_DIVIDE);
    expect(result).toBe(0);
  });

  it('should handle very large numbers', () => {
    expect(getReciprocal(1e9)).toBeCloseTo(1 / 1e9, 10);
  });

  it('should handle very small numbers', () => {
    expect(getReciprocal(1e-9)).toBeCloseTo(1 / 1e-9, 10);
  });

  it('should handle negative numbers', () => {
    expect(getReciprocal(-4)).toBe(-0.25);
    expect(getReciprocal(-0.5)).toBe(-2);
  });
});

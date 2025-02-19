import { ERROR_MESSAGE_SQRT } from '../constants/constants';
import { getSqrt } from '../utils/get-sqrt';

global.alert = jest.fn();

describe('getSqrt', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should calculate the square root of a positive number', () => {
    expect(getSqrt(4)).toBe(2);
    expect(getSqrt(9)).toBe(3);
    expect(getSqrt(0)).toBe(0);
  });

  it('should handle floating-point numbers', () => {
    expect(getSqrt(2)).toBeCloseTo(1.414213562, 5);
    expect(getSqrt(0.25)).toBe(0.5);
  });

  it('should alert and return the value for negative inputs', () => {
    const result = getSqrt(-4);

    expect(global.alert).toHaveBeenCalledWith(ERROR_MESSAGE_SQRT);
    expect(result).toBe(-4);
  });

  it('should handle very large numbers', () => {
    const largeNumber = 1e10;
    expect(getSqrt(largeNumber)).toBeCloseTo(1e5, 5);
  });

  it('should handle very small numbers', () => {
    const smallNumber = 1e-10;
    expect(getSqrt(smallNumber)).toBeCloseTo(1e-5, 5);
  });
});

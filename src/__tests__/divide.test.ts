import { ERROR_MESSAGE_DIVIDE } from '../constants/constants';
import { divide } from '../utils/divide';

global.alert = jest.fn();

describe('divide', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the result of division when b is not zero', () => {
    expect(divide(6, 2)).toBe(3);
  });

  it('should alert and return a when b is zero', () => {
    const result = divide(6, 0);

    expect(global.alert).toHaveBeenCalledWith(ERROR_MESSAGE_DIVIDE);
    expect(result).toBe(6);
  });

  it('should work with negative numbers', () => {
    expect(divide(-6, 2)).toBe(-3);
    expect(divide(6, -2)).toBe(-3);
    expect(divide(-6, -2)).toBe(3);
  });

  it('should handle floating-point numbers', () => {
    expect(divide(5, 2)).toBe(2.5);
  });
});

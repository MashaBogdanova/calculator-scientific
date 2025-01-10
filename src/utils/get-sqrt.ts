export function getSqrt(value: number): number | undefined {
  if (value < 0) {
    alert(
      'Whoops! That number is negative. Please try again with a non-negative value'
    );
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

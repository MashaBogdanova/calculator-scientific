export function getCubeRoot(value: number): number {
  if (value === 0) return 0;

  let guess: number = value / 2 || 1;
  let iterations: number = 20;

  while (iterations--) {
    guess = (2 * guess + value / (guess * guess)) / 3;
  }

  return guess;
}

import { getCubeRoot } from '../utils/get-cube-root';
import { getSqrt } from '../utils/get-sqrt';

export class CalculatorReceiver {
  private static value: number = 0;

  static getValue() {
    return this.value;
  }

  static setValue(newValue: number) {
    this.value = newValue;
  }

  static negate() {
    this.value = -this.value;
  }

  static clear() {
    this.value = 0;
  }

  static square() {
    this.value = this.value ** 2;
  }

  static cube() {
    this.value = this.value ** 3;
  }

  static powerOfTen() {
    this.value = 10 ** this.value;
  }

  static sqrt() {
    const sqrt = getSqrt(this.value);
    if (sqrt !== undefined) {
      this.value = sqrt;
    }
  }

  static cubeRoot() {
    this.value = getCubeRoot(this.value);
  }
}

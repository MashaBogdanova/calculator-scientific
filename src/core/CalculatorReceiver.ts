import { ERROR_MESSAGE_DIVIDE, INITIAL_VALUE } from '../constants';
import { getCubeRoot } from '../utils/get-cube-root';
import { getSqrt } from '../utils/get-sqrt';

export class CalculatorReceiver {
  private static value: string = INITIAL_VALUE;
  private static storedValue: number | null = null;
  private static currentOperation: ((a: number, b: number) => number) | null =
    null;

  static getValue() {
    return Number(this.value);
  }

  static setValue(newValue: string) {
    if (this.currentOperation !== null) {
      this.value = INITIAL_VALUE;
    }
    this.value = this.value + newValue;
  }

  static negate() {
    this.value = '-' + this.value;
  }

  static clear() {
    this.value = INITIAL_VALUE;
  }

  static square() {
    this.value = String(Number(this.value) ** 2);
  }

  static cube() {
    this.value = String(Number(this.value) ** 3);
  }

  static powerOfTen() {
    this.value = String(10 ** Number(this.value));
  }

  static sqrt() {
    const sqrt = getSqrt(Number(this.value));

    if (sqrt !== undefined) {
      this.value = String(sqrt);
    }
  }

  static cubeRoot() {
    this.value = String(getCubeRoot(Number(this.value)));
  }

  static reciprocal() {
    if (Number(this.value) !== 0) {
      this.value = String(1 / Number(this.value));
    } else {
      alert(ERROR_MESSAGE_DIVIDE);

      return;
    }
  }

  static performBinaryOperation(operation: (a: number, b: number) => number) {
    if (this.storedValue === null) {
      this.storedValue = Number(this.value);
    }
    this.currentOperation = operation;
  }

  static equals() {
    if (this.storedValue !== null && this.currentOperation !== null) {
      this.value = String(
        this.currentOperation(this.storedValue, Number(this.value))
      );
      this.storedValue = null;
      this.currentOperation = null;
    }
  }
}

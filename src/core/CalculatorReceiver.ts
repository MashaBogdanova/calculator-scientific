import { INITIAL_VALUE } from '../constants';
import { getFactorial } from '../utils/get-factorial';
import { getReciprocal } from '../utils/get-reciprocal';
import { getSqrt } from '../utils/get-sqrt';

export class CalculatorReceiver {
  private static value: string = INITIAL_VALUE;
  private static storedValue: number | null = null;
  private static memory: number = 0;
  private static currentOperation: ((a: number, b: number) => number) | null =
    null;
  private static shouldValueUpdate: boolean = false;

  static getValue() {
    return Number(this.value);
  }

  static setValue(newValue: string) {
    if (this.shouldValueUpdate) {
      this.value = newValue;
      this.shouldValueUpdate = false;
    } else {
      this.value = this.value + newValue;
    }
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
    this.value = String(getSqrt(Number(this.value)));
  }

  static cubeRoot() {
    this.value = String(Number(this.value) ** (1 / 3));
  }

  static reciprocal() {
    this.value = String(getReciprocal(Number(this.value)));
  }

  static factorial() {
    this.value = String(getFactorial(Number(this.value)));
  }

  static performBinaryOperation(operation: (a: number, b: number) => number) {
    if (this.storedValue === null) {
      this.storedValue = Number(this.value);
    }
    this.currentOperation = operation;
    this.shouldValueUpdate = true;
  }

  static equals() {
    if (this.storedValue !== null && this.currentOperation !== null) {
      const result = String(
        this.currentOperation(this.storedValue, Number(this.value))
      );
      this.value = result;
      this.storedValue = Number(result);
      this.currentOperation = null;
      this.shouldValueUpdate = false;
    }
  }

  static clearMemory() {
    this.memory = 0;
  }

  static addToMemory() {
    this.memory += Number(this.value);
  }

  static subtractFromMemory() {
    this.memory -= Number(this.value);
  }

  static recallMemory() {
    this.value = String(this.memory);
  }
}

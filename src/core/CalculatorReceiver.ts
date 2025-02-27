import { INITIAL_VALUE } from '../constants/constants';
import { getFactorial } from '../utils/get-factorial';
import { getReciprocal } from '../utils/get-reciprocal';
import { getSqrt } from '../utils/get-sqrt';
import { isNotZeroPrefixed } from '../utils/isNotZeroPrefixed';
import { isOnlyZerosValue } from '../utils/isOnlyZerosValue';

export class CalculatorReceiver {
  private static value: string = INITIAL_VALUE;
  private static storedValue: number | null = null;
  static memory: number = 0;
  private static currentOperation: ((a: number, b: number) => number) | null =
    null;
  private static shouldValueUpdate: boolean = false;
  private static isAfterEqual: boolean = false;
  private static isAfterOperation: boolean = false;

  static getValue() {
    if (isOnlyZerosValue(this.value)) {
      this.value = '0';
    }

    if (isNotZeroPrefixed(this.value)) {
      return this.value.slice(1);
    } else {
      return this.value;
    }
  }

  static setValue(newValue: string) {
    // prevent adding second point to number
    if (
      newValue === '.' &&
      this.value.includes('.') &&
      !this.isAfterOperation
    ) {
      return;
    }

    if (this.shouldValueUpdate || this.isAfterEqual) {
      if (this.isAfterEqual) {
        this.storedValue = null;
        this.currentOperation = null;
        this.isAfterEqual = false;
      }
      this.value = newValue === '.' ? '0.' : newValue;
      this.shouldValueUpdate = false;
    } else {
      this.value = this.value + newValue;
    }
    this.isAfterOperation = false;
  }

  static negate() {
    if (this.value.startsWith('-')) {
      this.value = this.value.slice(1);
    } else {
      this.value = '-' + this.value;
    }
    this.storedValue = Number(this.value);
    this.isAfterOperation = true;
  }

  static clear() {
    this.value = INITIAL_VALUE;
    this.storedValue = null;
    this.currentOperation = null;
    this.shouldValueUpdate = false;
    this.isAfterOperation = false;
  }

  static square() {
    this.value = String(Number(this.value) ** 2);
    this.storedValue = Number(this.value);
    this.isAfterOperation = true;
  }

  static cube() {
    this.value = String(Number(this.value) ** 3);
    this.storedValue = Number(this.value);
    this.isAfterOperation = true;
  }

  static powerOfTen() {
    this.value = String(10 ** Number(this.value));
    this.storedValue = Number(this.value);
    this.isAfterOperation = true;
  }

  static sqrt() {
    this.value = String(getSqrt(Number(this.value)));
    this.storedValue = Number(this.value);
    this.isAfterOperation = true;
  }

  static cubeRoot() {
    this.value = String(Number(this.value) ** (1 / 3));
    this.storedValue = Number(this.value);
    this.isAfterOperation = true;
  }

  static reciprocal() {
    this.value = String(getReciprocal(Number(this.value)));
    this.storedValue = Number(this.value);
    this.isAfterOperation = true;
  }

  static factorial() {
    this.value = String(getFactorial(Number(this.value)));
    this.storedValue = Number(this.value);
    this.isAfterOperation = true;
  }

  static percentage() {
    if (this.storedValue !== null && this.currentOperation !== null) {
      this.value = String((this.storedValue * Number(this.value)) / 100);
    } else {
      this.value = String(Number(this.value) / 100);
    }
    this.storedValue = Number(this.value);
    this.isAfterOperation = true;
  }

  static performBinaryOperation(operation: (a: number, b: number) => number) {
    this.isAfterEqual = false;

    if (this.storedValue === null) {
      this.storedValue = Number(this.value);
    } else {
      this.equals();
    }

    this.currentOperation = operation;
    this.shouldValueUpdate = true;
    this.isAfterEqual = false;
    this.isAfterOperation = true;
  }

  static equals() {
    if (this.storedValue !== null && this.currentOperation !== null) {
      const result = this.currentOperation(
        this.storedValue,
        Number(this.value)
      );
      this.value = String(result);
      this.storedValue = result;
      this.currentOperation = null;
      this.shouldValueUpdate = false;
      this.isAfterEqual = true;
      this.isAfterOperation = true;
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

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
}

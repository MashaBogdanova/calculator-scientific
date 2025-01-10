export class CalculatorReceiver {
  private static value: number = 0;

  static getValue() {
    return this.value;
  }

  static setValue(newValue: number) {
    this.value = newValue;
  }

  static clear() {
    this.value = 0;
  }
}

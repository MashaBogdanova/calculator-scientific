import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class SetValueCommand implements Command {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  execute() {
    CalculatorReceiver.setValue(this.value);
  }
}

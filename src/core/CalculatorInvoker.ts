import { Command } from '../commands/Command';
import { Calculator } from '../UI/calculator';
import { CalculatorReceiver } from './CalculatorReceiver';

export class CalculatorInvoker {
  private commands: { [key: string]: Command } = {};

  setCommand(label: string, command: Command) {
    this.commands[label] = command;
  }

  executeCommand(label: string) {
    const command = this.commands[label];
    command.execute();
    Calculator.updateDisplay(CalculatorReceiver.getValue());
  }
}

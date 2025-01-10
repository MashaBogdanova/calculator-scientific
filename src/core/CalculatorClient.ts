import { ClearCommand } from '../commands/ClearCommand';
import { SetValueCommand } from '../commands/SetValueCommand';
import { CalculatorInvoker } from './CalculatorInvoker';

export class CalculatorClient {
  private invoker: CalculatorInvoker;

  constructor(invoker: CalculatorInvoker) {
    this.invoker = invoker;
  }

  setupCommands() {
    this.invoker.setCommand('AC', new ClearCommand());
    this.invoker.setCommand('0', new SetValueCommand(0));
    this.invoker.setCommand('1', new SetValueCommand(1));
    this.invoker.setCommand('2', new SetValueCommand(2));
    this.invoker.setCommand('3', new SetValueCommand(3));
    this.invoker.setCommand('4', new SetValueCommand(4));
    this.invoker.setCommand('5', new SetValueCommand(5));
    this.invoker.setCommand('6', new SetValueCommand(6));
    this.invoker.setCommand('7', new SetValueCommand(7));
    this.invoker.setCommand('8', new SetValueCommand(8));
    this.invoker.setCommand('9', new SetValueCommand(9));
  }
}

import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class FactorialCommand implements Command {
  execute() {
    CalculatorReceiver.factorial();
  }
}

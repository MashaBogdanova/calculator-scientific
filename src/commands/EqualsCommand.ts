import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class EqualsCommand implements Command {
  execute() {
    CalculatorReceiver.equals();
  }
}

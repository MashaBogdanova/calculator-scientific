import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class NegateCommand implements Command {
  execute() {
    CalculatorReceiver.negate();
  }
}

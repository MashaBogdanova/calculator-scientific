import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class SqrtCommand implements Command {
  execute() {
    CalculatorReceiver.sqrt();
  }
}

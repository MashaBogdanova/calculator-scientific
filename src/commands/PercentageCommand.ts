import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class PercentageCommand implements Command {
  execute() {
    CalculatorReceiver.percentage();
  }
}

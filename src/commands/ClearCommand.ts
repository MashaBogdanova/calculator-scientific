import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class ClearCommand implements Command {
  execute() {
    CalculatorReceiver.clear();
  }
}

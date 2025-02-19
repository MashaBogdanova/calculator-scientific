import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class SubtractFromMemoryCommand implements Command {
  execute() {
    CalculatorReceiver.subtractFromMemory();
  }
}

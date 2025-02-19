import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class ClearMemoryCommand implements Command {
  execute() {
    CalculatorReceiver.clearMemory();
  }
}

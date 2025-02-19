import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class AddToMemoryCommand implements Command {
  execute() {
    CalculatorReceiver.addToMemory();
  }
}

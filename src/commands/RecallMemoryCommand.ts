import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class RecallMemoryCommand implements Command {
  execute() {
    CalculatorReceiver.recallMemory();
  }
}

import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class SquareCommand implements Command {
  execute() {
    CalculatorReceiver.square();
  }
}

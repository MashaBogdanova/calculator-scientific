import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class ReciprocalCommand implements Command {
  execute() {
    CalculatorReceiver.reciprocal();
  }
}

import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class SetPointCommand implements Command {
  execute() {
    CalculatorReceiver.setValue('.');
  }
}

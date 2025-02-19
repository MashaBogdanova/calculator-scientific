import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class PowerOfTenCommand implements Command {
  execute() {
    CalculatorReceiver.powerOfTen();
  }
}

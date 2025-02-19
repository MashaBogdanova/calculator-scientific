import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class CubeCommand implements Command {
  execute() {
    CalculatorReceiver.cube();
  }
}

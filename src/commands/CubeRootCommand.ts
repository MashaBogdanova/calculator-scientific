import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class CubeRootCommand implements Command {
  execute() {
    CalculatorReceiver.cubeRoot();
  }
}

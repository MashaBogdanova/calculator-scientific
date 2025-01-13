import { CalculatorReceiver } from '../core/CalculatorReceiver';
import { Command } from './Command';

export class BinaryOperationCommand implements Command {
  private operation: (a: number, b: number) => number;

  constructor(operation: (a: number, b: number) => number) {
    this.operation = operation;
  }

  execute() {
    CalculatorReceiver.performBinaryOperation(this.operation);
  }
}

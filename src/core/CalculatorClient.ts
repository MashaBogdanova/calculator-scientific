import { AddToMemoryCommand } from '../commands/AddToMemoryCommand';
import { BinaryOperationCommand } from '../commands/BinaryOperationCommand';
import { ClearCommand } from '../commands/ClearCommand';
import { ClearMemoryCommand } from '../commands/ClearMemoryCommand';
import { CubeCommand } from '../commands/CubeCommand';
import { CubeRootCommand } from '../commands/CubeRootCommand';
import { EqualsCommand } from '../commands/EqualsCommand';
import { FactorialCommand } from '../commands/FactorialCommand';
import { NegateCommand } from '../commands/NegateCommand';
import { PercentageCommand } from '../commands/PercentageCommand';
import { PowerOfTenCommand } from '../commands/PowerOfTenCommand';
import { RecallMemoryCommand } from '../commands/RecallMemoryCommand';
import { ReciprocalCommand } from '../commands/ReciprocalCommand';
import { SetValueCommand } from '../commands/SetValueCommand';
import { SqrtCommand } from '../commands/SqrtCommand';
import { SquareCommand } from '../commands/SquareCommand';
import { SubtractFromMemoryCommand } from '../commands/SubtractFromMemoryCommand';
import { divide } from '../utils/divide';
import { getNthRoot } from '../utils/get-nth-root';
import { CalculatorInvoker } from './CalculatorInvoker';

export class CalculatorClient {
  private invoker: CalculatorInvoker;

  constructor(invoker: CalculatorInvoker) {
    this.invoker = invoker;
  }

  setupCommands() {
    this.invoker.setCommand('AC', new ClearCommand());
    this.invoker.setCommand('0', new SetValueCommand(0));
    this.invoker.setCommand('1', new SetValueCommand(1));
    this.invoker.setCommand('2', new SetValueCommand(2));
    this.invoker.setCommand('3', new SetValueCommand(3));
    this.invoker.setCommand('4', new SetValueCommand(4));
    this.invoker.setCommand('5', new SetValueCommand(5));
    this.invoker.setCommand('6', new SetValueCommand(6));
    this.invoker.setCommand('7', new SetValueCommand(7));
    this.invoker.setCommand('8', new SetValueCommand(8));
    this.invoker.setCommand('9', new SetValueCommand(9));
    this.invoker.setCommand('+/-', new NegateCommand());
    this.invoker.setCommand('+', new BinaryOperationCommand((a, b) => a + b));
    this.invoker.setCommand('-', new BinaryOperationCommand((a, b) => a - b));
    this.invoker.setCommand('×', new BinaryOperationCommand((a, b) => a * b));
    this.invoker.setCommand(
      '÷',
      new BinaryOperationCommand((a, b) => divide(a, b))
    );
    this.invoker.setCommand('x²', new SquareCommand());
    this.invoker.setCommand('x³', new CubeCommand());
    this.invoker.setCommand('xʸ', new BinaryOperationCommand((a, b) => a ** b));
    this.invoker.setCommand('10ˣ', new PowerOfTenCommand());
    this.invoker.setCommand('√x', new SqrtCommand());
    this.invoker.setCommand('∛x', new CubeRootCommand());
    this.invoker.setCommand(
      'y√x',
      new BinaryOperationCommand((a, b) => getNthRoot(a, b))
    );
    this.invoker.setCommand('1/x', new ReciprocalCommand());
    this.invoker.setCommand('x!', new FactorialCommand());
    this.invoker.setCommand('%', new PercentageCommand());
    this.invoker.setCommand('=', new EqualsCommand());
    this.invoker.setCommand('mc', new ClearMemoryCommand());
    this.invoker.setCommand('m+', new AddToMemoryCommand());
    this.invoker.setCommand('m-', new SubtractFromMemoryCommand());
    this.invoker.setCommand('mr', new RecallMemoryCommand());
  }
}

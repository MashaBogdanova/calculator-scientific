import './styles/styles.scss';

import { calculatorButtons } from './config/buttons.config';
import { CalculatorClient } from './core/CalculatorClient';
import { CalculatorInvoker } from './core/CalculatorInvoker';
import { Calculator } from './UI/calculator';
import { ThemeToggle } from './UI/theme-toggle';

const invoker = new CalculatorInvoker();
const client = new CalculatorClient(invoker);
client.setupCommands();
new ThemeToggle();
new Calculator(calculatorButtons, invoker);

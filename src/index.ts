import './styles/styles.scss';

import { calculatorButtons } from './config/buttons.config';
import { CalculatorClient } from './core/CalculatorClient';
import { CalculatorInvoker } from './core/CalculatorInvoker';
import { Calculator } from './UI/calculator';

const invoker = new CalculatorInvoker();
const client = new CalculatorClient(invoker);
client.setupCommands();
new Calculator(calculatorButtons, invoker);

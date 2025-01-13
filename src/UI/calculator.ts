import { Button } from '../config/buttons.config';
import { CalculatorInvoker } from '../core/CalculatorInvoker';
import { createElement } from '../utils/create-element';

export class Calculator {
  invoker: CalculatorInvoker;
  private calculatorButtons: Button[];

  constructor(calculatorButtons: Button[], invoker: CalculatorInvoker) {
    this.calculatorButtons = calculatorButtons;
    this.invoker = invoker;
    this.render();
  }

  private render() {
    const main = createElement({
      tag: 'main',
      styles: ['main'],
      parent: document.body,
    });

    const calculator = createElement({
      tag: 'section',
      styles: ['calculator'],
      parent: main,
    });

    createElement({
      tag: 'div',
      styles: ['display'],
      parent: calculator,
      innerText: '0',
    });

    const buttons = createElement({
      tag: 'div',
      styles: ['buttons'],
      parent: calculator,
    });

    this.calculatorButtons.map(({ isSmall, isAccent, label }) => {
      createElement({
        tag: 'button',
        styles: [
          `${isSmall ? 'button_small' : 'button'}`,
          `${isAccent && 'button_accent'}`,
        ],
        parent: buttons,
        innerText: label,
      });
    });

    buttons.addEventListener('click', (event: MouseEvent) => {
      const button = event.target as HTMLButtonElement;
      this.invoker.executeCommand(button.innerText);
    });
  }

  static updateDisplay(value: number) {
    const display = document.querySelector('.display') as HTMLElement;

    if (display) {
      display.innerText = value.toString();
    }
  }
}

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
    document.body.classList.add('body');

    const main = createElement({
      tag: 'main',
      styles: ['main'],
      parent: document.body,
    });

    createElement({ tag: 'div', styles: ['circle'], parent: main });

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

    const buttonsContainer = createElement({
      tag: 'div',
      styles: ['buttons-container'],
      parent: calculator,
    });

    const buttonsSmall = createElement({
      tag: 'div',
      styles: ['buttons', 'buttons_small'],
      parent: buttonsContainer,
    });

    const buttons = createElement({
      tag: 'div',
      styles: ['buttons'],
      parent: buttonsContainer,
    });

    this.calculatorButtons.map(({ isSmall, isAccent, label }) => {
      createElement({
        tag: 'button',
        styles: [
          `${isSmall ? 'button_small' : 'button'}`,
          `${isAccent && 'button_accent'}`,
        ],
        parent: isSmall ? buttonsSmall : buttons,
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
      display.innerText = String(value).slice(0, 12);
    }
  }
}

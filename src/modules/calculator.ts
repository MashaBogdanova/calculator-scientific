import { calculatorButtons } from '../config/buttons.config';
import { createElement } from '../utils/create-element';

export class Calculator {
  constructor() {
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
      styles: ['output'],
      parent: calculator,
      innerText: '0',
    });

    const smallButtons = createElement({
      tag: 'div',
      styles: ['buttons'],
      parent: calculator,
    });

    const buttons = createElement({
      tag: 'div',
      styles: ['buttons'],
      parent: calculator,
    });

    calculatorButtons.map((button) => {
      createElement({
        tag: 'button',
        styles: [
          `${button.isSmall ? 'button_small' : 'button'}`,
          `${button.isAccent && 'button_accent'}`,
        ],
        parent: button.isSmall ? smallButtons : buttons,
        innerText: button.label,
      });
    });
  }
}

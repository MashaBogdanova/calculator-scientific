interface Button {
  label: string;
  action: string | null;
  style?: 'dark' | 'accent';
}

export const calculatorButtons: Button[] = [
  { label: 'mc', action: 'clearMemory', style: 'accent' },
  { label: 'm+', action: 'addToMemory', style: 'accent' },
  { label: 'm-', action: 'subtractFromMemory', style: 'accent' },
  { label: 'mr', action: 'recallMemory', style: 'accent' },

  { label: 'x²', action: 'square', style: 'dark' },
  { label: 'x³', action: 'cube', style: 'dark' },
  { label: 'xʸ', action: 'power', style: 'dark' },
  { label: '10ˣ', action: 'power10', style: 'dark' },

  { label: '1/x', action: 'reciprocal', style: 'dark' },
  { label: '√x', action: 'sqrt', style: 'dark' },
  { label: '∛x', action: 'cbrt', style: 'dark' },
  { label: 'y√x', action: 'nthRoot', style: 'dark' },

  { label: 'AC', action: 'clear', style: 'dark' },
  { label: '+/-', action: 'negate', style: 'dark' },
  { label: '%', action: 'percent', style: 'dark' },
  { label: '÷', action: 'divide', style: 'accent' },

  { label: '7', action: null },
  { label: '8', action: null },
  { label: '9', action: null },
  { label: '×', action: 'multiply', style: 'accent' },

  { label: '4', action: null },
  { label: '5', action: null },
  { label: '6', action: null },
  { label: '-', action: 'subtract', style: 'accent' },

  { label: '1', action: null },
  { label: '2', action: null },
  { label: '3', action: null },
  { label: '+', action: 'add', style: 'accent' },

  { label: '0', action: null },
  { label: '.', action: null },
  { label: '=', action: 'equals' },
  { label: 'x!', action: 'factorial' },
];

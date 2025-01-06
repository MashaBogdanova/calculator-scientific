interface Button {
  label: string;
  action: string | null;
  isAccent?: boolean;
  isSmall?: boolean;
}

export const calculatorButtons: Button[] = [
  { label: 'mc', action: 'clearMemory', isAccent: true, isSmall: true },
  { label: 'm+', action: 'addToMemory', isAccent: true, isSmall: true },
  { label: 'm-', action: 'subtractFromMemory', isAccent: true, isSmall: true },
  { label: 'mr', action: 'recallMemory', isAccent: true, isSmall: true },

  { label: 'x²', action: 'square', isSmall: true },
  { label: 'x³', action: 'cube', isSmall: true },
  { label: 'xʸ', action: 'power', isSmall: true },
  { label: '10ˣ', action: 'power10', isSmall: true },

  { label: '1/x', action: 'reciprocal', isSmall: true },
  { label: '√x', action: 'sqrt', isSmall: true },
  { label: '∛x', action: 'cbrt', isSmall: true },
  { label: 'y√x', action: 'nthRoot', isSmall: true },

  { label: 'AC', action: 'clear' },
  { label: '+/-', action: 'negate' },
  { label: '%', action: 'percent' },
  { label: '÷', action: 'divide', isAccent: true },

  { label: '7', action: null },
  { label: '8', action: null },
  { label: '9', action: null },
  { label: '×', action: 'multiply', isAccent: true },

  { label: '4', action: null },
  { label: '5', action: null },
  { label: '6', action: null },
  { label: '-', action: 'subtract', isAccent: true },

  { label: '1', action: null },
  { label: '2', action: null },
  { label: '3', action: null },
  { label: '+', action: 'add', isAccent: true },

  { label: '0', action: null },
  { label: '.', action: null },
  { label: 'x!', action: 'factorial' },
  { label: '=', action: 'equals', isAccent: true },
];

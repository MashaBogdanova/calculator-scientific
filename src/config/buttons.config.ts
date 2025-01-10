export interface Button {
  label: string;
  isAccent?: boolean;
  isSmall?: boolean;
}

export const calculatorButtons: Button[] = [
  { label: 'mc', isAccent: true, isSmall: true },
  { label: 'm+', isAccent: true, isSmall: true },
  { label: 'm-', isAccent: true, isSmall: true },
  { label: 'mr', isAccent: true, isSmall: true },

  { label: 'x²', isSmall: true },
  { label: 'x³', isSmall: true },
  { label: 'xʸ', isSmall: true },
  { label: '10ˣ', isSmall: true },

  { label: '1/x', isSmall: true },
  { label: '√x', isSmall: true },
  { label: '∛x', isSmall: true },
  { label: 'y√x', isSmall: true },

  { label: 'AC' },
  { label: '+/-' },
  { label: '%' },
  { label: '÷', isAccent: true },

  { label: '7' },
  { label: '8' },
  { label: '9' },
  { label: '×', isAccent: true },

  { label: '4' },
  { label: '5' },
  { label: '6' },
  { label: '-', isAccent: true },

  { label: '1' },
  { label: '2' },
  { label: '3' },
  { label: '+', isAccent: true },

  { label: '0' },
  { label: '.' },
  { label: 'x!' },
  { label: '=', isAccent: true },
];

import { create } from 'zustand';
import { CalculatorOperation, CalculatorState } from '@/types/calculator';

interface CalculatorStore extends CalculatorState {
  clear: () => void;
  deleteNumber: () => void;
  appendNumber: (number: string) => void;
  selectOperation: (operation: CalculatorOperation) => void;
  evaluate: () => void;
}

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  currentValue: '0',
  previousValue: '',
  operation: null,
  overwrite: false,

  clear: () => set({ currentValue: '0', previousValue: '', operation: null, overwrite: false }),

  deleteNumber: () => set((state) => ({
    currentValue: state.currentValue.slice(0, -1) || '0'
  })),

  appendNumber: (number) => set((state) => {
    if (state.overwrite) {
      return {
        currentValue: number,
        overwrite: false
      };
    }
    if (state.currentValue === '0' && number !== '.') {
      return { currentValue: number };
    }
    if (number === '.' && state.currentValue.includes('.')) {
      return state;
    }
    return { currentValue: `${state.currentValue}${number}` };
  }),

  selectOperation: (operation) => set((state) => {
    if (state.previousValue && state.operation) {
      return {
        operation,
        previousValue: evaluate(state),
        currentValue: '0',
        overwrite: true
      };
    }
    return {
      operation,
      previousValue: state.currentValue,
      currentValue: '0',
      overwrite: true
    };
  }),

  evaluate: () => set((state) => ({
    overwrite: true,
    operation: null,
    previousValue: '',
    currentValue: evaluate(state)
  }))
}));

const evaluate = ({ currentValue, previousValue, operation }: CalculatorState): string => {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  if (isNaN(prev) || isNaN(current)) return '0';

  let computation = 0;
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return '0';
  }

  return computation.toString();
};

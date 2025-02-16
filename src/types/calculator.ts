export type CalculatorOperation = '+' | '-' | '*' | '/' | '=';

export interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operation: CalculatorOperation | null;
  overwrite: boolean;
}

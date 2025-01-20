import { INITIAL_VALUE } from '../constants/constants';
import { CalculatorReceiver } from '../core/CalculatorReceiver';

describe('CalculatorReceiver', () => {
  beforeEach(() => {
    CalculatorReceiver.clear();
    CalculatorReceiver.clearMemory();
  });

  it('should return the initial value', () => {
    expect(CalculatorReceiver.getValue()).toBe(Number(INITIAL_VALUE));
  });

  it('should set a new value', () => {
    CalculatorReceiver.setValue('5');
    expect(CalculatorReceiver.getValue()).toBe(5);
  });

  it('should add a two-digit number by setting value twice', () => {
    CalculatorReceiver.setValue('1');
    CalculatorReceiver.setValue('2');
    expect(CalculatorReceiver.getValue()).toBe(12);
  });

  it('should negate the value', () => {
    CalculatorReceiver.setValue('5');
    CalculatorReceiver.negate();
    expect(CalculatorReceiver.getValue()).toBe(-5);
  });

  it('should clear the value', () => {
    CalculatorReceiver.setValue('5');
    CalculatorReceiver.clear();
    expect(CalculatorReceiver.getValue()).toBe(Number(INITIAL_VALUE));
  });

  it('should calculate the square of the value', () => {
    CalculatorReceiver.setValue('3');
    CalculatorReceiver.square();
    expect(CalculatorReceiver.getValue()).toBe(9);
  });

  it('should calculate the cube of the value', () => {
    CalculatorReceiver.setValue('2');
    CalculatorReceiver.cube();
    expect(CalculatorReceiver.getValue()).toBe(8);
  });

  it('should calculate power of ten', () => {
    CalculatorReceiver.setValue('2');
    CalculatorReceiver.powerOfTen();
    expect(CalculatorReceiver.getValue()).toBe(100);
  });

  it('should calculate percentage', () => {
    CalculatorReceiver.setValue('50');
    CalculatorReceiver.percentage();
    expect(CalculatorReceiver.getValue()).toBe(0.5);
  });

  it('should calculate percentage after addition', () => {
    const add = (a: number, b: number) => a + b;
    CalculatorReceiver.setValue('50');
    CalculatorReceiver.performBinaryOperation(add);
    CalculatorReceiver.setValue('10');
    CalculatorReceiver.percentage();
    CalculatorReceiver.equals();
    expect(CalculatorReceiver.getValue()).toBe(55);
  });

  it('should perform binary operations', () => {
    const add = (a: number, b: number) => a + b;
    CalculatorReceiver.setValue('5');
    CalculatorReceiver.performBinaryOperation(add);
    CalculatorReceiver.setValue('3');
    CalculatorReceiver.equals();
    expect(CalculatorReceiver.getValue()).toBe(8);
  });

  it('should add value to memory', () => {
    CalculatorReceiver.setValue('5');
    CalculatorReceiver.addToMemory();
    expect(CalculatorReceiver.memory).toBe(5);
  });

  it('should subtract value from memory', () => {
    CalculatorReceiver.setValue('5');
    CalculatorReceiver.addToMemory();
    CalculatorReceiver.subtractFromMemory();
    expect(CalculatorReceiver.memory).toBe(0);
  });

  it('should recall value from memory', () => {
    CalculatorReceiver.setValue('10');
    CalculatorReceiver.addToMemory();
    CalculatorReceiver.recallMemory();
    expect(CalculatorReceiver.getValue()).toBe(10);
  });
});

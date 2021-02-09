import { randomStringArray, randomValue as random } from '../../scripts/helper';
import {
  bindFunction,
  returnArgumentsArray,
  returnCounter,
  returnFirstArgument,
  returnFnResult,
  sumWithDefaults,
} from './index';
describe('�� 1 - �������', () => {
  describe('returnFirstArgument', () => {
    it('������ ���������� ���������� ��������', () => {
      const value = random();
      const result = returnFirstArgument(value);
      expect(result).toBe(value);
    });
  });
  describe('sumWithDefaults', () => {
    it('������ ���������� ����� ���������� ����������', () => {
      const valueA = random('number');
      const valueB = random('number');
      const result = sumWithDefaults(valueA, valueB);
      expect(result).toBe(valueA + valueB);
    });
    it('�������� �� ��������� ������� ��������� ������ ���� 100', () => {
      const value = random('number');
      const result = sumWithDefaults(value);
      expect(result).toBe(value + 100);
    });
  });
  describe('returnFnResult', () => {
    it('������ ���������� ��������� ������ ���������� �������', () => {
      function fn() {
        return value;
      }
      const value = random();
      const result = returnFnResult(fn); // result = fn() -> value
      expect(result).toBe(value);
    });
  });
  describe('returnCounter', () => {
    it('������ ���������� �������', () => {
      const result = returnCounter();
      expect(typeof result).toBe('function');
    });
    it('������������ ������� ������ ����������� ���������� ����� �� ������� ��� ������ ������', () => {
      const value = random('number');
      const result = returnCounter(value);
      expect(result()).toBe(value + 1);
      expect(result()).toBe(value + 2);
      expect(result()).toBe(value + 3);
    });
    it('�������� ��������� ������ ���� 0 �� ���������', () => {
      const result = returnCounter();
      expect(result()).toBe(1);
      expect(result()).toBe(2);
      expect(result()).toBe(3);
    });
  });
  describe('returnArgumentsArray', () => {
    it('������ ���������� ���������� ��������� � ���� �������', () => {
      const value = random('array', 1);
      const result = returnArgumentsArray(...value);
      expect(result).toEqual(value);
    });
    it('������ ���������� ������ ������ ���� ��� ����������', () => {
      const result = returnArgumentsArray();
      expect(result.length).toBe(0);
    });
  });
  describe('bindFunction', () => {
    const valuesArr = randomStringArray();
    function fn(...valuesArr) {
      return [...arguments].join('');
    }
    it('������ ���������� �������', () => {
      const result = bindFunction(fn);
      expect(typeof result).toBe('function');
    });
    it('������ ����������� ����� ���-�� ���������� ������������ �������', () => {
      const result = bindFunction(fn, ...valuesArr);
      expect(result()).toBe(valuesArr.join(''));
    });
  });
});

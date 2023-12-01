import { day1 } from './day1';
import { data, testData } from './day1.data';
import { logAnswer } from '../utils/logging';

/* test('Personal test cases', () => {
  expect(day1()).toBe(1);
}); */

test('Provided test cases', () => {
  expect(day1(testData as string[])).toBe(1);
});

test('Returns an answer', () => {
  logAnswer(day1(data as string[]));
});

import { day3part2 } from "./day3.part2";
import { data, testData } from "./day3.data";
import { logAnswer } from "../utils/logging";

/* test('Personal test cases', () => {
  expect(day3part2()).toBe(3);
}); */

test("Provided test cases", () => {
  expect(day3part2(testData as string[])).toBe(467835);
});

test("Returns an answer", () => {
  logAnswer(day3part2(data as string[]));
});

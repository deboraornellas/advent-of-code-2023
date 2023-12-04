import { day1part2 } from "./day1.part2";
import { data, part2testData } from "./day1.data";
import { logAnswer } from "../utils/logging";

test("Personal test cases", () => {
  expect(day1part2(["twone"])).toBe(21);
});

test("Provided test cases", () => {
  expect(day1part2(part2testData as string[])).toBe(281);
});

test("Returns an answer", () => {
  logAnswer(day1part2(data as string[]));
});

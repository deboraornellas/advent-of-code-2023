import { day1 } from "./day1";

export const day1part2 = (input: string[]) => {
  const isDigit = (char: string) => Number.isInteger(Number(char));
  let sum = 0;
  let sum2 = 0;
  const writtenNumbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  //regex to match the strings above and any one-digit number
  //it should match twone as two and one
  const regex = new RegExp(`(${writtenNumbers.join("|")})|([1-9])`, "g");

  //map from written number to digit
  const numberMap = new Map<string, number>();

  writtenNumbers.forEach((n, i) => numberMap.set(n, i + 1));
  input.forEach((s) => {
    let firstDigit = "";
    let lastDigit = "";
    let match;
    const matches = [];
    while ((match = regex.exec(s)) !== null) {
      matches.push(match[0]);
      // Reset lastIndex to the index after the last match
      regex.lastIndex = match.index + 1;
    }
    firstDigit = isDigit(matches![0])
      ? matches![0]
      : `${numberMap.get(matches![0])}`;
    lastDigit = isDigit(matches![matches!.length - 1])
      ? matches![matches!.length - 1]
      : `${numberMap.get(matches![matches!.length - 1])}`;
    sum += Number(`${firstDigit}${lastDigit}`);
  });

  return sum;
};

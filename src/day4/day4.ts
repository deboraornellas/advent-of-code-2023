export const day4 = (input: string[]) => {
  let sum = 0;
  input.forEach((line) => {
    const splitLine = line.split(":");
    const winningNumbers = splitLine[1]!
      .split("|")[0]!
      .trim()
      .split(" ")
      .filter(Boolean)
      .map(Number);
    const winningNumbersSet = new Set(winningNumbers);
    const numbersYouHave = splitLine[1]!
      .split("|")[1]!
      .trim()
      .split(" ")
      .filter(Boolean)
      .map(Number);
    let power = 0;
    numbersYouHave.forEach((number) => {
      if (winningNumbersSet.has(number)) {
        power++;
      }
    });
    sum += power > 0 ? Math.pow(2, power - 1) : 0;
  });
  return sum;
};

export const day4part2 = (input: string[]) => {
  const arr = Array.from({ length: input.length }, () => 1);
  input.forEach((line, index) => {
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
    let wins = 0;
    numbersYouHave.forEach((number) => {
      if (winningNumbersSet.has(number)) {
        wins++;
      }
    });
    for (let i = index + 1; i <= index + wins; i++) {
      arr[i] += arr[index];
    }
  });
  return arr.reduce((a, b) => a + b, 0);
};

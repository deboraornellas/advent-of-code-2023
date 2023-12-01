export const day1 = (input: string[]) => {
  const isDigit = (char: string) => Number.isInteger(Number(char));
  let sum = 0;

  input.forEach((s) => {
    let firstDigit = "";
    let lastDigit = "";
    for (let i = 0; i < s.length; i++) {
      if (isDigit(s.charAt(i))) {
        if (!firstDigit) firstDigit = s.charAt(i);
        lastDigit = s.charAt(i);
      }
    }
    sum += Number(`${firstDigit}${lastDigit}`);
  });
  return sum;
};

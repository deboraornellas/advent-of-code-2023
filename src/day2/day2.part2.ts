export const day2part2 = (input: string[]) => {
  let sum = 0;

  input.forEach((s) => {
    let isValid = true;
    const splitByColon = s.split(":")[1];
    const splitBySemiColon = splitByColon.split(";");
    const colors: Record<string, number> = {
      red: 0,
      green: 0,
      blue: 0,
    };
    splitBySemiColon.forEach((game) => {
      const splitByCommaAndSpace = game.split(",").map((s) => s.split(" "));
      splitByCommaAndSpace.forEach((n) => {
        if (Number(n[1]) > colors[n[2]]) {
          colors[n[2]] = Number(n[1]);
        }
      });
    });
    if (isValid)
      sum += Object.entries(colors).reduce((acc, val) => acc * val[1], 1);
  });
  return sum;
};

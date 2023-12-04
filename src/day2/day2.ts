export const day2 = (input: string[]) => {
  let sum = 0;
  const maxQtys: Record<string, number> = {
    red: 12,
    green: 13,
    blue: 14,
  };
  input.forEach((s, gameIndex) => {
    let isValid = true;
    const splitByColon = s.split(":")[1];
    const splitBySemiColon = splitByColon.split(";");
    splitBySemiColon.forEach((game) => {
      const splitByCommaAndSpace = game.split(",").map((s) => s.split(" "));
      splitByCommaAndSpace.forEach((n) => {
        if (Number(n[1]) > maxQtys[n[2]]) {
          isValid = false;
        }
      });
    });
    if (isValid) sum += gameIndex + 1;
  });
  return sum;
};

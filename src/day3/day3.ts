export const day3 = (input: string[]) => {
  const coveredPlaces = new Set<string>();
  const numberMap = new Map<number, string[][]>();
  input.forEach((line, lineIndex) => {
    const splitLine = line.split("");
    let numberAsString = "";
    let numberPositions: string[] = [];
    splitLine.forEach((el, elIndex) => {
      if (Number.isInteger(Number(el))) {
        numberAsString = numberAsString.concat(el);
        numberPositions.push(JSON.stringify([lineIndex, elIndex]));
      } else {
        numberAsString !== "" &&
          numberMap.set(
            Number(numberAsString),

            [...(numberMap.get(Number(numberAsString)) || []), numberPositions]
          );
        numberAsString = "";
        numberPositions = [];
        if (el !== ".") {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              coveredPlaces.add(JSON.stringify([lineIndex + i, elIndex + j]));
            }
          }
        }
      }
    });
    numberAsString !== "" &&
      numberMap.set(
        Number(numberAsString),

        [...(numberMap.get(Number(numberAsString)) || []), numberPositions]
      );
  });
  let sum = 0;
  numberMap.forEach((arr, number) => {
    arr.forEach((coordinates) => {
      let match = false;
      coordinates.forEach((coordinate) => {
        if (coveredPlaces.has(coordinate)) {
          match = true;
        }
      });
      if (match) {
        sum += number;
      }
    });
  });
  return sum;
};

export const day3part2 = (input: string[]) => {
  let coveredPlaces: string[] = [];
  const coveredPlacesArr: { matches: number[]; coveredPlaces: string[] }[] = [];
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
        if (el === "*") {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              coveredPlaces.push(JSON.stringify([lineIndex + i, elIndex + j]));
            }
          }
          coveredPlacesArr.push({
            matches: [],
            coveredPlaces: [...coveredPlaces],
          });
          coveredPlaces = [];
        }
      }
    });
    numberAsString !== "" &&
      numberMap.set(
        Number(numberAsString),

        [...(numberMap.get(Number(numberAsString)) || []), numberPositions]
      );
  });
  numberMap.forEach((arr, number) => {
    arr.forEach((coordinates) => {
      coveredPlacesArr.forEach((item) => {
        let match = false;
        coordinates.forEach((coordinate) => {
          if (item.coveredPlaces.includes(coordinate)) {
            match = true;
          }
        });
        if (match) {
          item.matches.push(number);
        }
      });
    });
  });
  let sum = 0;
  coveredPlacesArr.forEach((item) => {
    if (item.matches.length === 2) {
      sum += item.matches[0] * item.matches[1];
    }
  });
  return sum;
};

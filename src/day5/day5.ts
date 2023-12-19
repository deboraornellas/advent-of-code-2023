export const day5 = (input: string[]) => {
  const filteredInput = input.filter(Boolean);
  const seeds = filteredInput[0].split(" ");
  seeds.shift();
  const indexes: number[] = indexesFromInput(filteredInput);
  return getLocationFromSeeds(seeds.map(Number), filteredInput, indexes);
};

export const getLocationFromSeeds = (
  seeds: number[],
  input: string[],
  indexes: number[]
) => {
  let minimum = Infinity;
  seeds.forEach((seed) => {
    let seedValue = seed;
    indexes.forEach((initialIndex, arrIndex) => {
      let currentIndex = initialIndex;
      while (
        currentIndex < input.length &&
        currentIndex !== indexes[arrIndex + 1] - 1
      ) {
        const lineArr = input[currentIndex].split(" ");
        const target = Number(lineArr[0]);
        const source = Number(lineArr[1]);
        const interval = Number(lineArr[2]);
        if (seedValue >= source && seedValue <= source + interval) {
          seedValue = target + (seedValue - source);
          break;
        }
        currentIndex++;
      }
    });
    if (seedValue < minimum) {
      minimum = seedValue;
    }
  });

  return minimum;
};

export const indexesFromInput = (input: string[]) => {
  const indexes: number[] = [];
  input.forEach((line, index) => {
    if (line.includes("seed-to-soil")) {
      indexes.push(index + 1);
    }
    if (line.includes("soil-to-fertilizer")) {
      indexes.push(index + 1);
    }
    if (line.includes("fertilizer-to-water")) {
      indexes.push(index + 1);
    }
    if (line.includes("water-to-light")) {
      indexes.push(index + 1);
    }
    if (line.includes("light-to-temperature")) {
      indexes.push(index + 1);
    }
    if (line.includes("temperature-to-humidity")) {
      indexes.push(index + 1);
    }
    if (line.includes("humidity-to-location")) {
      indexes.push(index + 1);
    }
  });
  return indexes;
};

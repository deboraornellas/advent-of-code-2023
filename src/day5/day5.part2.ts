import { binaryMinSearch } from "../utils/helpers";
import { getLocationFromSeeds, indexesFromInput } from "./day5";

const THRESHOLD = 500000;

export const day5part2 = (input: string[]) => {
  const filteredInput = input.filter(Boolean);
  const sectionIndexes: number[] = indexesFromInput(filteredInput);
  const seedLine = filteredInput[0].split(" ");
  seedLine.shift();
  let minimum = Infinity;
  for (let i = 0; i < seedLine.length; i += 2) {
    const smallestSeed = Number(seedLine[i]);
    const largestSeed = Number(seedLine[i]) + Number(seedLine[i + 1]) - 1;
    // console.log(smallestSeed, largestSeed);
    let pastSeed = smallestSeed;
    let currentSeed = Math.min(smallestSeed + THRESHOLD, largestSeed);
    while (currentSeed < largestSeed) {
      minimum = logic(
        currentSeed,
        pastSeed,
        filteredInput,
        sectionIndexes,
        minimum
      );
      pastSeed = currentSeed;
      currentSeed = Math.min(currentSeed + THRESHOLD, largestSeed);
      // console.log(pastSeed, currentSeed, largestSeed);
    }
    minimum = logic(
      currentSeed,
      pastSeed,
      filteredInput,
      sectionIndexes,
      minimum
    );
  }

  return minimum;
};

const logic = (
  currentSeed: number,
  pastSeed: number,
  filteredInput: string[],
  sectionIndexes: number[],
  minimum: number
) => {
  let min = minimum;
  const locationCurrent = getLocationFromSeeds(
    [currentSeed],
    filteredInput,
    sectionIndexes
  );
  const locationPast = getLocationFromSeeds(
    [pastSeed],
    filteredInput,
    sectionIndexes
  );
  if (locationCurrent !== locationPast + (currentSeed - pastSeed)) {
    let seeds: number[] = [];
    for (let j = 0; j < currentSeed - pastSeed; j++) {
      seeds.push(pastSeed + j);
    }
    const location = binaryMinSearch(seeds, (val) =>
      getLocationFromSeeds([val], filteredInput, sectionIndexes)
    );
    if (location < min) {
      min = location;
    }
  } else {
    if (locationPast < min) {
      min = locationPast;
    }
  }
  return min;
};

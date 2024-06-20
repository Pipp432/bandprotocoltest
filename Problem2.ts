const ChickenRescue = (roofSize: number, positions: Array<number>): number => {
  // Case only 1 chicken (Roof size is nonzero so must be saved)
  if (positions.length === 1) return 1

  // Using a sliding window approach to the problem
  let rightPointer: number = 0;
  let maxSaved: number = 0;
  for (let i = 0; i < positions.length; i++) {
    // Starting from the first chicken, try to cover as much chickens as possible
    while (positions[rightPointer] - positions[i] < roofSize) {
      // If the current length covered by the roof is not the roof size we go to the next position
      rightPointer++;
    }
    // Once the next chicken's position is beyond the roof's size we stop and count the chickens
    // In this case we do not +1 due to the right pointer will point to the first chicken outside the roof,
    // due to the above while loop
    const chickenSaved = rightPointer - i

    // Once we found the last chicken we compare the number of chicken saved to the maximum we have found
    maxSaved = Math.max(maxSaved, chickenSaved)
  }

  return maxSaved
}

console.log("---PROVIDED TEST CASE---")
console.log(ChickenRescue(5, [2, 5, 10, 12, 15]))
console.log(ChickenRescue(10, [1, 11, 30, 34, 35, 37]))

console.log("---ADDITIONAL TEST CASE---")
console.log(ChickenRescue(3, [1, 2, 3, 4, 5, 6]))
console.log(ChickenRescue(10, [3]))
console.log(ChickenRescue(5, [1, 2, 3, 20, 21, 22, 23, 24, 25]))

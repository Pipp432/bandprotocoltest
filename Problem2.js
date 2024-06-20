var ChickenRescue = function (roofSize, positions) {
    // Case only 1 chicken (Roof size is nonzero so must be saved)
    if (positions.length === 1)
        return 1;
    // Using a sliding window approach to the problem
    var rightPointer = 0;
    var maxSaved = 0;
    for (var i = 0; i < positions.length; i++) {
        while (positions[rightPointer] - positions[i] < roofSize) {
            rightPointer++;
        }
        var chickenSaved = rightPointer - i;
        maxSaved = Math.max(maxSaved, chickenSaved);
    }
    return maxSaved;
};
console.log("---PROVIDED TEST CASE---");
console.log(ChickenRescue(5, [2, 5, 10, 12, 15]));
console.log(ChickenRescue(10, [1, 11, 30, 34, 35, 37]));
console.log("---ADDITIONAL TEST CASE---");
console.log(ChickenRescue(3, [1, 2, 3, 4, 5, 6]));
console.log(ChickenRescue(10, [3]));
console.log(ChickenRescue(5, [1, 2, 3, 20, 21, 22, 23, 24, 25]));

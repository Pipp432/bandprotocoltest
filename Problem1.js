var BossBabyRevenge = function (inputString) {
    //Check case where the Boss shoots first
    if (inputString[0] === "R")
        return "Bad boy";
    //Check null case
    if (!inputString)
        return "Bad boy";
    // Check single character input
    if (inputString.length < 2)
        return "Bad boy";
    // For the remaining case we will use a stack to solve the problem
    var stack = [];
    for (var i = 0; i < inputString.length; i++) {
        // If we see "S" push it to the stack
        if (inputString[i] === "S")
            stack.push(inputString[i]);
        // If we see "R" pop a "S" out of the stack (meaning that a shot has been revenged)
        // If the stack is empty and we see a "R" then we skip it since a shot can be revenged multiple times
        if (inputString[i] === "R" && stack.length > 0)
            stack.pop();
    }
    // If any "S" is still in the stack that means it has not been revenged
    // else we have revenged all shots
    return stack.length > 0 ? "Bad boy" : "Good boy";
};
//---PROVIDED TEST CASES--- 
console.log("---PROVIDED TEST CASES---");
console.log(BossBabyRevenge("SRSSRRR"));
console.log(BossBabyRevenge("RSSRR"));
console.log(BossBabyRevenge("SSSRRRRS"));
console.log(BossBabyRevenge("SRRSSR"));
console.log(BossBabyRevenge("SSRSRRR"));
//---ADDITIONAL TEST CASES---
console.log("---ADDITIONAL TEST CASES---");
console.log(BossBabyRevenge("S")); // return "Bad boy"
console.log(BossBabyRevenge("R")); // return "Bad boy"
console.log(BossBabyRevenge("SRSRSRSR")); // return "Good boy"
console.log(BossBabyRevenge("SRRRRRRRR")); // return "Good boy"
console.log(BossBabyRevenge("RSSSSSSS")); // return "Bad boy"

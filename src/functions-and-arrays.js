// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
  // if (num1 > num2) {
  //   return num1;
  // }
  // if (num2 > num1) {
  //   return num2;
  // }

  // return num1;
}
// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
// 1st iteration
//longestword = ""
// word -> mistewry
// 7 > 0?
// longestWord = mistery

// 2nd iteration
// word ->

function findLongestWord(arrayOfWords) {
  // let longestWord = "";

  // for (let word of arrayOfWords) {
  //   if (word.length > longestWord.length) {
  //     longestWord = word;
  //   }
  // }

  // return longestWord;
  if (arrayOfWords.length === 0) {
    return null;
  }
  return arrayOfWords.reduce(function (acc, val) {
    if (val.length > acc.length) {
      return val;
    }
    return acc;
  }, "");
  // 1st version of the loop:
  //  accumulator ("")
  // val (mistery)
  // mistery
  // 2nd loop
  // acc (mistery)
  // val (brother)
  // mistery
  // 3rd loop
  // acc (mistery)
  // val (aviator)
  /* 
   const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
]; */
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  // let sum = 0;

  // for (let number of arrayOfNumbers) {
  //   sum += number;
  // }
  // for (let i = 0; i < arrayOfNumbers.length; i++) {
  //   sum += arrayOfNumbers[i];
  // }

  // return sum;
  return arrayOfNumbers.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  // 1st loop
  // acc (0)
  // val (6)
  // return 6 + 0
  // 2nd loop
  // acc (6)
  // val (12)
  // return 6+12
  // 3rd loop
  // acc (18)
  // val (1)
  // returns 18 +1
  // 4th loop
  // acc (19)
  // val (18)
  // returns 18 + 19
  /* 
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
   */
}

function sum(arrayOfSomething) {
  return arrayOfSomething.reduce(function (acc, val) {
    if (typeof val === "boolean") {
      return acc + Number(val);
    }
    if (typeof val === "number") {
      return acc + val;
    }
    if (typeof val === "string") {
      return acc + val.length;
    }
    if (typeof val === "object") {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }, 0);
  let sum = 0;
  for (let value of arrayOfSomething) {
    switch (typeof value) {
      case "boolean": {
        sum += Number(value);
        break;
      }
      case "number": {
        sum += value;
        break;
      }
      case "string": {
        sum += value.length;
        break;
      }
      case "object": {
        throw new Error("Unsupported data type sir or ma'am");
      }
    }
    //   if (typeof value === "boolean") {
    //     sum += Number(value); // true =>1 // false => 0
    //   } else if (typeof value === "number") {
    //     sum += value;
    //   } else if (typeof value === "string") {
    //     sum += value.length;
    //   } else if (typeof value === "object") {
    //     throw new Error("Unsupported data type sir or ma'am");
    //   }
  }
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return null;
  }
  const sumOfAllNumbers = sum(arrayOfNumbers);
  return sumOfAllNumbers / arrayOfNumbers.length;
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(arrayOfStrings) {
  if (!arrayOfStrings.length) {
    return null;
  }
  let sum = 0;
  arrayOfStrings.forEach(function (word) {
    sum += word.length;
  });

  return sum / arrayOfStrings.length;
  // if (!arrayOfStrings.length) {
  //   return null;
  // }
  // return sum(arrayOfStrings) / arrayOfStrings.length;
}

function avg(arrayOfSomething) {
  if (!arrayOfSomething.length) {
    return null;
  }
  const average = sum(arrayOfSomething) / arrayOfSomething.length;
  const averageWithTwoDecimalPoints = average.toFixed(2);
  // return +averageWithTwoDecimalPoints;
  // return Number(averageWithTwoDecimalPoints);
  return parseFloat(averageWithTwoDecimalPoints);
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(array) {
  // if (!array.length) {
  //   return null;
  // }
  // const uniqueArray = [];

  // for (let word of array) {
  //   console.log("current word: ", word);
  //   console.log("current state of the uniqueArray", uniqueArray);
  //   if (uniqueArray.indexOf(word) < 0) {
  //     console.log("UNIQUE WORD IN ARRAY AT THIS STEP: ", word);
  //     uniqueArray.push(word);
  //   }
  // }

  // console.log("final Value of unique Arrray: ", uniqueArray);
  // return uniqueArray;
  if (!array.length) {
    return null;
  }

  // FILTER
  return array.filter(function (word, idx) {
    return array.indexOf(word) === idx;
  });

  // 1st loop:
  // array.indexOf("crab") => 0
  // idx => 0
  // true
  // it decided to keep the "crab"
  // 2nd loop:
  // array.indexOf("poison") => 1
  // idx => 1
  // true
  // it decided to also keep this "poison"
  // 3rd loop
  // array.indexOf("crab") => 0
  // idx => 2
  // false
  // it decided NOT to keep this "crab"

  /* 
  const wordsUnique = [
  "crab",
  "poison",
  "crab",
  "contagious",
  "contagious",
  "simple",
  "crab",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

   */

  // REDUCE FASHION
  return array.reduce(function (acc, val) {
    if (acc.indexOf(val) < 0) {
      const arr = acc;
      arr.push(val);
      return arr;
    }
    return acc;
  }, []);

  // 1st loop
  // acc ([])
  // val (crab)
  // [].indexOf("crab") => negative (indexOf returns the index of the element in an array. if its not there, gives negative number)
  // ["crab"]
  // 2nd loop
  // acc (["crab"])
  // val ("poison")
  // ["crab"].indexOf("poison") => negative
  // returns ["crab", "poison"]
  // 3rd loop
  // acc (["crab", "poison"])
  // val ("crab")
  // ["crab", "poison"].indexOf("crab") >= 0
  // returns ["crab", "poison"]

  /* 
  const wordsUnique = [
  "crab",
  "poison",
  "crab",
  "contagious",
  "contagious",
  "simple",
  "crab",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

   */

  //  OVER ENGINEERED DUMB SOLUTION

  return array
    .map(function (element, index) {
      return array.indexOf(element) === index;
    })
    .filter(function (booleans) {
      return booleans === true;
    });
}

console.log("EXAMPLE OF UNIQUIFY: ", uniquifyArray(wordsUnique));

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWords, word) {
  if (!arrayOfWords.length) {
    return null;
  }

  // const exists = arrayOfWords.find(function (element) {
  //   return element === word;
  // });

  // if (!exists) {
  //   return false;
  // }

  // return true;

  return arrayOfWords.includes(word);
  // return arrayOfWords.includes(word);
  // for (let eachIndividualWord of arrayOfWords) {
  //   if (eachIndividualWord === word) {
  //     // exists = true;
  //     return true;
  //   }
  // }

  // return false;
}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(arrayOfWords, word) {
  let numberOfTimes = 0;

  arrayOfWords.forEach(function (individual) {
    if (individual === word) {
      numberOfTimes++;
    }
  });
  // for (let individual of arrayOfWords) {
  //   if (individual === word) {
  //     numberOfTimes++;
  //   }
  // }
  return numberOfTimes;
}

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    4,
    56,
    62,
    0,
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    3,
    49,
    13,
    36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80,
  ],
  [
    24,
    47,
    32,
    60,
    99,
    3,
    45,
    2,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50,
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70,
  ],
  [
    67,
    26,
    20,
    68,
    2,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    8,
    40,
    91,
    66,
    49,
    94,
    21,
  ],
  [
    24,
    55,
    58,
    5,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16,
    39,
    5,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    0,
    17,
    54,
    24,
    36,
    29,
    85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19,
    80,
    81,
    68,
    5,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    4,
    89,
    55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    3,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69,
  ],
  [
    4,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    8,
    46,
    29,
    32,
    40,
    62,
    76,
    36,
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    4,
    36,
    16,
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    1,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    5,
    54,
  ],
  [
    1,
    70,
    54,
    71,
    83,
    51,
    54,
    69,
    16,
    92,
    33,
    48,
    61,
    43,
    52,
    1,
    89,
    19,
    67,
    48,
  ],
];

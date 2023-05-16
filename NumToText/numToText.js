module.exports = function converNumToText(input) {
  if (input > 1000) {
    return `Maximum number exceeded`;
  } else {
    let readNum = input.toString();
    switch (readNum.length) {
      case 1:
        return singular[input];
      case 2:
        if (input > 20) {
          return `${doubler[readNum[0]]} ${singular[readNum[1]]}`;
        } else if (input >= 10 && input <= 20) {
          return `${teenty[input]}`;
        }
        break;
      case 3:
        if (+readNum.slice(1) > 20) {
          return `${singular[readNum[0]]} hundred and ${doubler[readNum[1]]} ${
            singular[readNum[2]]
          }`;
        } else if (+readNum.slice(1) === 0) {
          return `${singular[readNum[0]]} hundred`;
        } else if (+readNum.slice(1) < 20 && +readNum.slice(1) > 10) {
          return `${singular[readNum[0]]} hundred and ${
            teenty[+readNum.slice(1)]
          }`;
        } else if (+readNum.slice(1) < 10) {
          return `${singular[readNum[0]]} hundred and ${
            singular[+readNum.slice(1)]
          }`;
        }
    }
  }
};

let singular = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  0: "zero",
};

let doubler = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

let teenty = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
};

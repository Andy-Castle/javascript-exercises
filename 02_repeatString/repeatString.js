const repeatString = function (word, repeat) {
  if (repeat < 0) return "ERROR";
  let Array = [];
  for (let i = 1; i <= repeat; i++) {
    Array.push(word);
  }
  return Array.join("");
};

console.log(repeatString("Andy", 4));

// Do not edit below this line
module.exports = repeatString;

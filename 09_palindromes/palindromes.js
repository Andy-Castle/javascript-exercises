const palindromes = function (string) {
  const alphanumerical = "qwertyuiopasdfghjklñzxcvbnm1234567890";

  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  const reverseString = cleanedString.split("").reverse().join("");

  return cleanedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;

const convertToCelsius = function (fahToCel) {
  return (fahToCel - 32) / 1.8;
};

const convertToFahrenheit = function (celToFah) {
  return celToFah * 1.8 + 32;
};

// ESTE SI LO puede resolver obvio

console.log(convertToCelsius(32));

console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

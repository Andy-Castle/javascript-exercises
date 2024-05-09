const getTheTitles = function (books) {
  let arr = [];
  for (let i = 0; i < books.length; i++) {
    arr.push(books[i].title);
  }
  console.log(arr);
};

// Do not edit below this line
module.exports = getTheTitles;

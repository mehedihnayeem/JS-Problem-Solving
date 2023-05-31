const strings = [
  "ThisIsAReallyLongStringWithNoSpaces",
  "AnotherVeryLongStringWithoutSpaces",
  "SomeLongStringWithoutSpacesAtAll",
  "YetAnotherStringWithNoSpaces",
  "LongestStringInThisArrayWithoutSpaces",
];

function findBigString(array) {
  let arr = array.map((item) => item.length);
  let maxIndex = arr.indexOf(Math.max(...arr));

  // return `The Bigest string in that array is "${array[maxIndex]}" and index is "${maxIndex}"`;

  return [array[maxIndex], maxIndex];
}

console.log(findBigString(strings));

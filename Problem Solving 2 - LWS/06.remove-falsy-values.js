//Find falsy values and eliminate them from the array.

const falsyValues = [false, 0, "", null, undefined, NaN];

const array = [
  0,
  false,
  "",
  null,
  undefined,
  NaN,
  true,
  "hello",
  42,
  [],
  {},
  Symbol(),
  -1,
  Infinity,
];

const finalArr = [];

array.forEach((item) => {
  if (!falsyValues.includes(item)) {
    finalArr.push(item);
  }
});

console.log(finalArr);


//alternative solution


const result = array.filter(Boolean);

console.log(result);

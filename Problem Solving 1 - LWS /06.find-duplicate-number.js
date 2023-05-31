const array = [1, 2, 4, 3, 4, 2, 2, 3];

let newArr = [];
let count = 0;

array.forEach((num) => {
  count = 0; // Reset count for each iteration

  array.forEach((element) => {
    if (element === num) {
      count++;
    }
  });

  if (!newArr.includes(num) && count > 1) {
    newArr.push(num);
  }
});

console.log(newArr);



//Alternative Solution
const numbers = [1, 2, 4, 3, 4, 2, 2, 3, 3];

const duplicate = numbers.filter((value, index, array) => {
  return array.indexOf(value) !== index;
});

console.log(duplicate);

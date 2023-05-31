// divisible by 3 fizz, 5 buzz and both 3, 5  fizzBuzz

function fizzBuzz(number) {
  for (let num = 1; num <= number; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(`${num} is fizzBuzz`);
    } else if (num % 3 === 0) {
      console.log(`${num} is fizz`);
    } else if (num % 5 === 0) {
      console.log(`${num} is buzz`);
    } else {
      console.log(num);
    }
  }
}

console.log(fizzBuzz(100));

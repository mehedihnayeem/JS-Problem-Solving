function randomNum(start, end) {
  return Math.floor(Math.random() * (end - start) + 1) + start;
}

console.log(randomNum(1, 6));

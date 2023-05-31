function linearSearch(array, target) {
  let index = array.indexOf(target);
  return index !== -1 ? index : "Not Found";
}

const index = linearSearch(["a", "b", "c", "d", "e", "f", "a"], "e");
console.log(index);

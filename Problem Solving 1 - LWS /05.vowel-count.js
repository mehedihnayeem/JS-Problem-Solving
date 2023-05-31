// Find how many Vowels in a Sentence
const vowels = ["a", "e", "i", "o", "u"];

function vowelCount(sentence) {
  const extract = sentence.toLowerCase().split("");

  let length = extract.length;

  let count = 0;

  for (let i = 0; i < length; i++) {
    if (vowels.includes(extract[i])) {
      count++;
    }
  }

  return count;
}

console.log(vowelCount("I love Bangladesh"));

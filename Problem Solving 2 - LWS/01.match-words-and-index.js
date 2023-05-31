const sentence =
  "The challenge of AI in Bangladesh is both promising and complex. As a country with a burgeoning tech industry, Bangladesh recognizes the transformative potential of artificial intelligence in various sectors. However, there are several hurdles to overcome. Firstly, there is a need to develop a skilled workforce proficient in AI technologies to drive innovation and implementation. Additionally, there is a requirement for robust infrastructure and resources to support AI research and development. Ethical considerations, data privacy, and security are also critical concerns. Despite these challenges, Bangladesh is actively embracing AI, aiming to leverage its potential for economic growth, improved services, and sustainable development in various domains.";

const extract = sentence.split(" ");

let count = 0;

extract.forEach((value, index, array) => {
  if (value === "Bangladesh") {
    count++;
  }
});

console.log(extract.indexOf("Bangladesh"));
console.log(count);

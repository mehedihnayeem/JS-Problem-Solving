const sentence =
  "The challenge of AI in Bangladesh is both promising and complex. As a country with a burgeoning tech industry, Bangladesh recognizes the transformative potential of artificial intelligence in various sectors. However, there are several hurdles to overcome. Firstly, there is a need to develop a skilled workforce proficient in AI technologies to drive innovation and implementation. Additionally, there is a requirement for robust infrastructure and resources to support AI research and development. Ethical considerations, data privacy, and security are also critical concerns. Despite these challenges, Bangladesh is actively embracing AI, aiming to leverage its potential for economic growth, improved services, and sustainable development in various domains.";

const matches = sentence.match(/bangladesh/gi);
const occurence = matches ? matches.length : 0;

let position = sentence.search(/bangladesh/i);
position = position >= 0 ? position : "not found";

console.log(occurence);
console.log(position);

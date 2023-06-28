import nlp from 'compromise';

const doc = nlp('She sells seashells by the seashore.');

console.log(doc.nouns().out('array'));  // "['She', 'seashells', 'seashore']"

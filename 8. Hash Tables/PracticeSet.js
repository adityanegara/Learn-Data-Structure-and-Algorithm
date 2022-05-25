const letters = new Set();
letters.add('a');
letters.add('b');
letters.add('c');
letters.add('a');
letters.delete('c');
const isTheresLetterC = letters.has('c');
console.log(isTheresLetterC);
letters.forEach (function(value) {
    console.log(value)
})
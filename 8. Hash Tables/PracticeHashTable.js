const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('a', 'wolo');
map.delete('b');

const valueWithKeyA = map.get('a');
const isKeyCHasValue = map.has('c');
const mapSize = map.size;

map.forEach((value, key) => { 
    console.log(`${key} : ${value}`);
 } )

// console.log(isKeyCHasValue);
// console.log(valueWithKeyA);
// console.log(mapSize);


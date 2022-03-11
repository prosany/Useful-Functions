var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

var arrays = [],
  size = 3;

for (let i = 0; i < a.length; i += size) arrays.push(a.slice(i, i + size));

console.log(arrays);
console.log(arrays.length);

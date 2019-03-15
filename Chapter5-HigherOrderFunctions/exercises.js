

/* Flattening */

let arrays = [[1, 2, 3], [4, 5], [6]];

const flattened = arrays.reduce((flat, arr) => flat.concat(arr), []);

console.log();
console.log(flattened); // → [1, 2, 3, 4, 5, 6]


/* Your Own Loop */

function loop(init, test, update, body) {
  let i = init;
  while(test(i)) {
    body(i);
    i = update(i);
  }
}

console.log();
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


/* Everything */

function everyLoop(array, test) {
  for (const elem of array) {
    if (!test(elem))
      return false
  }
  return true
}


function every(array, test) {
  return !array.some(n => !test(n))
}


console.log();
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true



/* Dominant Writing Direction */

require('./scripts');

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  const counts = {};
  for (let char of text) {
    let script = characterScript(char.codePointAt(0));
    if(script)
      counts[script.direction] = script.direction in counts ? counts[script.direction] + 1 : 1;
  }
  return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b)
}

console.log();
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
/* Minimum */

const min = (a, b) => a < b ? a: b;

/* Recursion */

function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num > 0) {
    return isEven(num - 2);
  } else {
    return isEven(num + 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-4));

/* Bean Counting */

countBs = str => countChar(str, 'B');

function countChar(str, char) {
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if (str[i] === char) {
      count += 1
    }
  }
  return count
}

console.log(countBs('BubBly-bubBlé'));
// → 3
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
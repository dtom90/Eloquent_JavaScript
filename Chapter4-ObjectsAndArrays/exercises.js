
/* The Sum of a Range */

function range(start, end, step=1) {
  const incrementing = step > 0;
  const result = [];
  for (let i = start; incrementing ? i <= end : i >= end; i+=step){
    result.push(i)
  }
  return result;
}

function sum(arr) {
  let result = 0;
  for (let elem of arr) {
    result += elem
  }
  return result;
}

console.log(sum(range(1, 10)));
console.log(sum(range(2, 10, 2)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

/* Reversing an Array */

function reverseArray(arr) {
  const result = [];
  for (let elem of arr) {
    result.unshift(elem)
  }
  return result
}

console.log(reverseArray(range(1, 10)));

function reverseArrayInPlace(arr) {
  const end = arr.length - 1;
  for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[end - i];
    arr[end - i] = temp;
  }
}

const arr = range(1, 10);
reverseArrayInPlace(arr);
console.log(arr);

/* A List */

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
console.log(list);

function arrayToList(arr) {
  const list = {};
  let current = list;
  for (let i = 0; i < arr.length; i++) {
    const newElem = { value: arr[i], rest: null };
    if (i === 0) {
      Object.assign(list, newElem)
    } else {
      current.rest = newElem;
      current = current.rest;
    }
  }
  return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  const result = [];
  let current = list;
  result.push(current.value);
  while(current.rest !== null) {
    current = current.rest;
    result.push(current.value);
  }
  return result;
}

console.log(listToArray(list));

function prepend(elem, list) {
  return {
    value: elem,
    rest: list
  }
}

console.log(prepend(0, list));

function nth(list, n) {
  let current = list;
  let i = 0;
  while (current != null && i <= n) {
    if (i === n) {
      return current.value;
    }
    current = current.rest;
    i += 1;
  }
  return undefined;
}

console.log(nth(list, 0));
console.log(nth(list, 1));
console.log(nth(list, 2));
console.log(nth(list, 3));

function recursiveNth(list, n) {
  if (n === 0) {
    return list.value;
  }
  if (list.rest == null) {
    return undefined
  }
  return recursiveNth(list.rest, n-1)
}

console.log(recursiveNth(list, 0));
console.log(recursiveNth(list, 1));
console.log(recursiveNth(list, 2));
console.log(recursiveNth(list, 3));

/* Deep Comparison */

function deepEqual(obj1, obj2) {
  if (obj1 === null && obj2 === null) {
    return true
  }
  if (typeof obj1 === "object" && typeof obj2 === "object" && obj1 !== null && obj2 !== null) {
    let propsEqual = true;
    for (let prop1 of Object.keys(obj1)) {
      if (!(prop1 in obj1)) {
        return false
      }
      propsEqual = propsEqual && deepEqual(obj1[prop1], obj2[prop1]);
    }
    return propsEqual;
  } else {
    return obj1 === obj2;
  }
}

console.log(deepEqual(list, arrayToList([1, 2, 3])));
console.log(deepEqual(list, arrayToList([1, 3, 3])));
console.log(deepEqual(list, arrayToList([1, 2, 3, 4])));

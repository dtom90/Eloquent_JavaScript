
const range = n => [...Array(n).keys()];

console.log(range(5));

for (const i of Array(5).keys()) {
  console.log(i);
}

for (const i of range(5)) {
  console.log(i)
}

function repeat(n, func) {
  for (const i of range(n)) {
    func(i)
  }
}

repeat(5, i => {
  console.log(i)
});

range(5).forEach(i => console.log(i));
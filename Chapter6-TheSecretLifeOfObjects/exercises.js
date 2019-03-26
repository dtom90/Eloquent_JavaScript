
console.log('\nA Vector Type\n')

class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(otherVec) {
    return new Vec(
      this.x + otherVec.x,
      this.y + otherVec.y
    )
  }

  minus(otherVec) {
    return new Vec(
      this.x - otherVec.x,
      this.y - otherVec.y
    )
  }

  get length() {
    return Math.sqrt(this.x*this.x + this.y*this.y)
  }
}

const vecA = new Vec(3,4)
const vecB = new Vec(1,1)

console.log(vecA)
console.log('length: '+vecA.length)
console.log(vecB)
console.log('length: '+vecB.length)
console.log(vecA.plus(vecB))
console.log(vecA.minus(vecB))

console.log('\nGroups\n')

class Group {
  constructor() {
    this.group = []
  }

  add(element) {
    if (this.group.indexOf(element) === -1) {
      this.group.push(element)
    }
  }

  delete(element) {
    const idx = this.group.indexOf(element)
    if (idx !== -1) {
      this.group.splice(idx, 1)
    }
  }

  has(element) {
    return this.group.indexOf(element) !== -1
  }

  static from(iterable) {
    const group = new Group()
    for (let elem of iterable) {
      group.add(elem)
    }
    return group
  }
}

const myGroup = new Group()
myGroup.add(2)
myGroup.add(3)
myGroup.add(2)
console.log(myGroup)
myGroup.delete(2)
console.log(myGroup)
console.log(myGroup.has(3))
console.log(myGroup.has(2))
const largerGroup = Group.from([1,2,3,3,3,4,5,2,2,7,8,9,6])
console.log(largerGroup)

console.log('\nIterable Groups\n')

class GroupIterator {
  constructor(group) {
    this.i = 0
    this.group = group.group
  }

  next() {
    if (this.i === this.group.length) {
      return {done: true}
    }

    const elem = this.group[this.i]

    this.i++
    return {value: elem, done: false}
  }
}
Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this)
}

for (let elem of largerGroup) {
  console.log(elem)
}

console.log('\nBorrowing a Method\n')

messedUpObject = {
  hasOwnProperty: "foobar"
}

console.log(messedUpObject)
console.log(messedUpObject.hasOwnProperty)
console.log(messedUpObject['hasOwnProperty'])
console.log(Object.getPrototypeOf(messedUpObject).hasOwnProperty('foozey'))
console.log(Object.getPrototypeOf(messedUpObject).hasOwnProperty('hasOwnProperty'))

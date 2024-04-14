import { getDeepCopy1, getDeepCopy2 } from "./deepCopy.js";

const person = {
  first: 'jenda',
  last: 'benda',
  dog: {
    name: 'Jessie',
    breed: 'labrador',
    toys: ['ball', 'bone',],
  },
}

const test1 = () => {
  const start = new Date().getTime()
  let result
  for (let i = 0; i < 1000000; i++) {
    result = getDeepCopy1(person)
  }
  const end = new Date().getTime()
  return end - start // čas v ms
}

const test2 = () => {
  const start = new Date().getTime()
  let result
  for (let i = 0; i < 1000000; i++) {
    result = getDeepCopy2(person)
  }
  const end = new Date().getTime()
  return end - start // čas v ms
}

console.log(test1())
console.log(test2())


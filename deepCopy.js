

// deep copy of object

const person = {
  first: 'jenda',
  last: 'benda',
  dog: {
    name: 'Jessie',
    breed: 'labrador',
    toys: ['ball', 'bone',],
  },
}

// "{
//   "first": "jenda",
//   "last": "benda",
//   "dog": {
//     "name": "Jessie",
//     "breed": "labrador",
//     "toys": ["ball", "bone"]
//   }
// }"

// JSON.stringify() makes JSON string from object
// JSON.parse() makes JS object from JSON string

export const getDeepCopy1 = (obj) => JSON.parse(JSON.stringify(obj))

const getDeepCopyOfArray = (ar) => {
  const copy = []
  // procházet pole ar
  ar.forEach(item => {
    let valueToPush
    if (Array.isArray(item)) {
      valueToPush = getDeepCopyOfArray(item)
    } else if (typeof item === 'object' && item !== null) {
      valueToPush = getDeepCopy2(item)
    } else {
      valueToPush = item
    }
    copy.push(valueToPush)
  })
  // pushneme do copy:
  // pokud item je primitivní, tak item
  // pokud item je objekt, tak výsledek funkce getDeepCopy2(item)
  // pokud item je array, tak výsledek funkce getDeepCopyOfArray(item)
  return copy
}

export const getDeepCopy2 = (obj) => {
  const copy = {}
  // procházet všechny vlastnosti objektu
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      copy[key] = getDeepCopyOfArray(obj[key])
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      copy[key] = getDeepCopy2(obj[key])
    } else {
      copy[key] = obj[key] // copy.first = 'jenda', copy.last = 'benda'
    }
  }
  // vytvořit v copy vlastnost se stejným názvem a přiřadit do ní:
  // pokud value je primitivní, tak value
  // pokud value je objekt, tak výsledek funkce getDeepCopy2(value)
  // pokud value je array, tak výsledek funkce getDeepCopyOfArray(value)
  return copy
}

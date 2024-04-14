const myString = 'Karel Houska'

const methods = {
  // SPLIT REVERSE
  way1 (input) {
    return input.split('').reverse().join('')
  },
  // FOREACH
  way2 (input) {
    let output = ''
    const splited = input.split('') // ['K', 'a', ....]
    splited.forEach((letter) => {
      output = letter + output
    })
    return output
  },
  // FOR IN LOOP
  way3 (input) {
    let output = ''
    for (let letter of input) {
      output = letter + output
    }
    return output
  },
  // FOR LOOP
  way4 (input) {
    let output = ''
    for (let i = 0; i < input.length; i++) {
      output = input[i] + output
    }
    return output
  },
  // FOR LOOP REVERSE
  way5 (input) {
    let output = ''
    for (let i = input.length - 1; i >= 0; i--) {
      output += input[i]
    }
    return output
  },
  // REDUCE
  way6 (input) {
    const ar = input.split('')
    return ar.reduce((acc, cur) => {
      return cur + acc
    }, '')
  },
  // RECURSION
  way7 (input) { // 'Karel'
    if (input.length === 0) {
      return ''
    } else {
      return this.way7(input.slice(1)) + input[0]
    }
  },
  // BODY LESS LOOP
  way8 (input) {
    let output = ''
    for (let i = input.length - 1; i >= 0; output += input[i--]);
    return output
  },
  // WHILE LOOP
  way9 (input) {
    let i = 0
    let output = ''
    while (i < input.length) {
      output = input[i] + output
      i++
    }
    return output
  },
  // WHILE LOOP REVERSE
  way10 (input) {
    let i = input.length
    let output = ''
    while (i--) {
      output += input[i]
    }
    return output
  },
  // DO WHILE REVERSE
  way11 (input) {
    let output = ''
    let i = input.length - 1
    do {
      output += input[i]
      i--
    } while (i >= 0)
    return output
  },
  // HELČA
  way12 (input) {
    return input.split('').map(char => char).reverse().join('')
  },
  // HELČA2
  way13 (input) {
    return input.split('').reduceRight((acc, char) => acc + char, '')
  }
}

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque quas aperiam atque deserunt et tempore eum culpa, fuga dolor blanditiis ipsum a quo temporibus aliquam reiciendis, laboriosam quos. Illum.`
const results = []
for (let i = 1; i <= 13; i++) {
  const start = new Date().getTime()
  for (let j = 0; j < 100000; j++) {
    methods['way' + i](lorem)
  }
  const end = new Date().getTime()
  results.push(end - start)
}

console.log(results)

// Martin - Reduce
// Adam - Helča, první
// Tomík - první
// vykreslit do formuláře
// a) options podle firem v tabulce companies
// b) do všech kontrolek vložit údaje zaměstnance s id 15

// 1) načíst data pro options - všechny firmy
// 2) načíst záznam zaměstnance 15 - jeden záznam
// 3) vyplnit data do formu
// 4) formu oddělat class invisible a divu class loading ji přidat

const getAll = (table) => {
  return fetch('https://sdaapi.glabazna.eu/' + table)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.data
    })
}

const getOne = (table, id) => {
  return fetch('https://sdaapi.glabazna.eu/' + table + '/' + id)
    .then(response => response.json())
    .then(json => json.data)
}

const promises = [getAll('js4companies'), getOne('js4employees', 15)]

Promise.all(promises)
  .then(results => {
    const companies = results[0]
    const guy = results[1]
    const select = document.querySelector('select')
    companies
      .sort((a, b) => a.company.localeCompare(b.company))
      .forEach((company) => {
        const option = document.createElement('option')
        // option.setAttribute('value', company.id)
        option.value = company.id
        option.textContent = `${company.company} (${company.city})`
        if (company.id === guy.companyid) {
          option.setAttribute('selected', 'selected')
        }
        select.appendChild(option)
      })
    const controls = document.querySelectorAll('form input')
    controls.forEach(control => {
      const id = control.getAttribute('id')
      control.value = guy[id]
    })
    document.querySelector('.loading').classList.add('invisible')
    document.querySelector('form').classList.remove('invisible')
  })

// getAll('js4companies').then((companies) => {
//   getOne('js4employees', 15).then((guy) => {
//     console.log(companies)
//     console.log(guy)
//   })
// })

// Promise.all([promise1, promise2, ...])
//  .then([results] => {
// [result of promise1, result od promise2, ...]
// })

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = {
    first: document.getElementById('first').value,
    last: document.getElementById('last').value,
    position: document.getElementById('position').value,
    companyid: document.getElementById('companyid').value,
    id: document.getElementById('id').value
  }
  fetch('https://sdaapi.glabazna.eu/js4employees', {
    method: 'PUT',
    body: JSON.stringify(formData)
  })
})

// Promise.resolve('cosi')
//   .then((data) => { })
//   .then((data) => { })
//   .then((data) => { })

// Promise.reject().catch(() => {})







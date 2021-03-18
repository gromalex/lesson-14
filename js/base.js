// CRUD
// - Create
// - Read
// - Update
// - Delete

// AJAX (Async JavaScript ans XML)
// Методы запроса
// POST
// GET
// PUT
// DELETE

// Статусы запроса
// 1xx - информационный
// 2хх - успешное выполнение
// 3хх - перенаправление
// 4хх - ошибка на стороне клиента
// 5хх - ошибка на сервере

// const xhr = new XMLHttpRequest()
// console.log(xhr)

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')

// xhr.onload = () => {
//   console.log(xhr.status)
//   console.log(xhr.statusText)

//   if (xhr.status == 200) {
//     console.log(xhr.response)
//   }
// }

// xhr.onerror = () => {
//   console.error(`Error: ${xhr.status} ${xhr.statusText}`)
// }

// xhr.send()

const obj = {
  prop1: 'value1',
  prop2: 1234234,
  prop3: true,
  prop4: [1, 3, 5, 6],
  prop5: function () {}
}

const jsonObj = JSON.stringify(obj)
console.log(jsonObj)

const jsonString = '{"name": "Alex", "age": "30", "id": 12421524}'
console.log(jsonString)
console.warn(JSON.parse(jsonString))

//Написать функцию, которая создает пустой объект, но без прототипа.

const obj = Object.create(null)

console.log(obj)  //  [object Object] { ... } Нет свойств
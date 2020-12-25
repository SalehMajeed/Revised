// const fun = (x) =>{
// 	return x;
// }
// const result =  fun
// console.log(result(4));


// var curry = f => x => y => f(x, y)
// var add = (x,y) => (x + y)
// console.log(curry(add)(1)(2))
// console.log(curry(add))

// addition
let a = 15, b = 4;
let curry = f => x => y => f(x, y)
let value_x;
let value_y
let calculation;

let add = (x, y) => (x + y)

calculation = curry(add)
value_x = calculation(a)
value_y = value_x(b)
console.log(curry)
console.log(add)
console.log(calculation)
console.log(value_x)
console.log('')
console.log(value_y)
console.log('')

let multiplication = (x, y) => (x * y)
calculation = curry(multiplication)
value_x = calculation(a)
value_y = value_x(b)
console.log(value_y)
console.log('')

let divide = (x, y) => x / y
calculation = curry(divide)
value_x = calculation(a)
value_y = value_x(b)
console.log(value_y)
console.log('')

let subtraction = (x, y) => x - y
calculation = curry(subtraction)
value_x = calculation(a)
value_y = value_x(b)
console.log(value_y)
console.log('')

let modulo = (x, y) => x % y
calculation = curry(modulo)
value_x = calculation(a)
value_y = value_x(b)
console.log(value_y)
console.log('')
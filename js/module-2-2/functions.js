//  Объявление (создание) функции
// Function expression
// нельзя вызывать до объявление

const myfunc = function name(param1, param2) {
  console.log(`Это функциональное выражение ${param1} ${param2}`)
  
}

// Function declaration
// Можно вызывать до объявления
function myFuncDecl(param) {
  console.log(`Это декларативное объявление`);
  
}

// Arrow function - ES6
const myArrowFunc = (param1) => {
  console.log(`Это стрелочная функция`)
  
}

// Вызовы функций
// myfunc('Hello', 'Baby');
// myFuncDecl();
// myArrowFunc();

let user
// parametrs & arguments
function toSayHello(userName = "User") {
  // alert(`Hello ${userName}!!!`)
}
// toSayHello('Maria');
// toSayHello(user)

function showInfo(userName, userAge) {
  // console.log(`Hello, my name is ${userName}. I am ${userAge} years old`);
  
}
showInfo('Maria', 31)

// arguments & ...args

function getResult() {
  // console.log(arguments);
  for (let elem of arguments) {
  
    // console.log(elem);
    
  }

  // Преобразование псевдомассива в полноценный массив
  const myArgs = Array.from(arguments);
  // console.log(myArgs);
}
getResult(0, 1)

const getArrayRes = (...allParams) => {
  // console.log(arguments);
  // console.log(allParams);
  
}
getArrayRes(1, 2, 3, 4)

// Guard Clause

function getOddValues(array, value) {
  // console.log(array);
  for (let i = 0; i < array.length; i += 1) {

    // if (array[i] === value) return console.log(`Значение ${value} есть в массиве`);  
        
  }
  //  return console.log(`Значение ${value} отсутствует`);
}
getOddValues([1, 2, 3, 4, 5, 6, 7], 5)

function getSpam(text, words) {
  // console.log(text);
  // console.log(words);
  for (let word of words) {
    if (text.includes(word)) return `SPAM`
  }
  return text
}
const arr = ['aaa', 'ccc']
let value = `aaa bbb ccc ddd eee fff ggg`
// console.log(getSpam(value, arr));

// Arrow func & return

const getTotal = (a, b) => {
  return a + b;
}
// console.log(getTotal(2,3));


// Задачи

// 1
// Проверка высокосный год

function checkYear(year) {
  
  let condition = year % 4 === 0;

  if (condition) return `${year} высокосный`
  return `${year} не высокосный`
  
}
console.log(checkYear(2021));

// 2
//Написать программу, где компьютер загадывает число от 1 до 10 и предлагает пользователю угадать это число
function game() {
  let comp = Math.ceil(Math.random() * (10 - 1) + 1);

  let user = prompt('Введите число от 1 до 10')
  console.log(comp, user);

  if (comp == user) return 'You are win'
  return 'You lose'
}
console.log(game());

// 3
function getMathResult() {
  let num1 = prompt('`Enter the first number`')
  let num2 = prompt('`Enter the second number`')
  let symbol = prompt('`Enter the symbol`')
  let total = 0;
  console.log(num1,num2, symbol);
  switch (symbol) {
    case '+':
      total = Number(num1) + Number(num2);
      break
    case '-':
      total = num1 - num2;
      break
    case '*':
      total = num1 * num2;
      break
    case '/':
      total = num1 / num2;
      break
    default: console.error('error')
  }
  return total
}
console.log(getMathResult());

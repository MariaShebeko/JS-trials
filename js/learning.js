// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// let age = 91
// let message

// if (age >= 14 && age <= 90) {

//   message = 'adult'
// } else {
//   message = 'child'
// }
// console.log(message);

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// let age = 20
// let message

// if (!(age >= 14 && age <= 90)) {
//   message = 'child'
// } else {
//   message = 'adult'
// }
// console.log(message);

// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращаетnull.

// let userName = prompt("What is your name&")

// if (userName === 'admin') {

//   let password = prompt('Your password'); 

//     if (password === "Я главный") {
//       alert("Здравствуйте!")
//   }
//     else if (password === '' || password === null) {
//       alert('Отменено')
//   }
//     else {
//       alert('Неверный пароль')
//     }

// }

// else if (userName === '' || userName === null) {
//   alert('Canceled')
// }

// else {
//   alert("I don't know you")
// }


// let sum = 0

// while (true) {
//   let value = +prompt("введите число", '');

//   if (!value) break;

//   sum += value;
// }
// alert('Сумма:' + sum)


// for (let i = 0; i < 10; i += 1) {
//   if (i % 2 === 0) continue;  // пропускает четные числа

//   alert(i);
// }

// for (let i = 0; i < 10; i += 1) {

//   if (i % 2) {
//     alert(i);
//   }
// }  // аналогичный предыдущему


// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 1; i < 11; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);

//   }
// }

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// let num

// do {
//   num = prompt('Введите число', 0)
// } while (num <= 100 && num)

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

// let n = 30

// nextPrime:
// for (let i = 0; i < n; i += 1) {

//   for (let j = 2; j < i; j += 1) {

//     if (i % j === 0) continue nextPrime;
//   }
//   console.log(i);

// }

// let browser = 'Chrome';

// if (browser == '') {
//   console.log("You've got Edge");

// } else if (browser == 'Chrome'
//             || browser == 'Firefox'
//             || browser == 'Safari'
//             || browser == 'Opera') {

//   console.log('Okay we support these browsers too');

// } else {
//   console.log('We hope that this page looks ok!');

// }


// const number = +prompt('Введите число между 0 и 3', '')

// switch (number) {
//   case 0:
//     console.log('Вы ввели число 0');
//     break
//   case 1:
//     console.log('Вы ввели число 1');
//     break;
//   case 2:
//   case 3:
//     console.log('Вы ввели число 2, а может и 3');
//     break;
//   default:
//     console.log('не то');

// }

// ====================== Functions ============================

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// let x = prompt('введите х', '');
// let n = prompt('введите n', '');

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i += 1) {
//     result *= x;
//   }

//   return result;

// }
// console.log(pow(x, n));


// let age = prompt('Сколько вам лет?')

// let welcome

// if (age < 18) {

//   welcome = function () {
//     alert('Hi!');
//   };
// } else {
//   welcome = function () {
//     alert('Good day!')
//   }
// }

// welcome();

// let age = prompt('Сколько вам лет?')

// let welcome = age < 18 ? alert('Hi!') : alert('Good day!');

//  ===================== Arrow Functions =========================
// let sum = (a, b) => a + b;
// alert(sum(2, 3));

// let double = n => n * 2;
// console.log(double(3));

// let sayHi = () => alert('Hello!')
// sayHi();

// let age = prompt("How old are you?", 18);
// let welcome = (age < 18) ? () => alert('Hi') : () => alert('Good day!');

// welcome();

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// }
// console.log(sum(1,2));

// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// )


function basicOp(operation, value1, value2) {
  let result = 0
  switch(operation) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      result = value1 + value2;
      break;
  }
  console.log(result);
  
  return result
}
basicOp('+', 4, 7);
basicOp('-', 15, 18);
basicOp('*', 5, 5);
basicOp('/', 49, 7);
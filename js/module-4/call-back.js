// High-order function

// function highOrder(value, callback) {
//   console.log(`Hello, I am high order function`);
//   callback(value)
// }
// highOrder(`Hello, I am callback`, setMessage)

// // Callback function
// function setMessage(message) {
//   console.log(message)
// }

// EXAMPLE 1
// function toDoMeal(products, cb) {

//   let result = cb(products)

//   console.log(result);
  
// }
// toDoMeal(['bread', 'meat'], toDoSandwich)
// toDoMeal(['banana', 'orange'], toDoSandwich)
// //Callback
// function toDoSandwich(arr) {

//   let bread = arr.includes('bread');

//   return (bread) ? 'sandwich for you!' : `no bread`
  
// }

// EXAMPLE 2
// const results = [{mail: '', scores: 10}]
// function getResultsByTests(getMax, getMin, mail, ...scores) {
//   // 1 добавляем в базу данные о тесте
//   let total = 0
//   for (let i of scores) {
//     total += i;
//   }
//   console.log(total);
//   const obj = { mail, scores: total }
//   results.push(obj)
//   console.log(results);
//   // 2 проверяем обновленные данные с помощью колбэка
//   const scoresArr = []
//   for (let obj of results) {
//     console.log(obj.scores);
//     scoresArr.push(obj.scores)
//   }
//   console.log(scoresArr);
//   let max = getMax(scoresArr);
//   let min = getMin(scoresArr);

//   console.log('max:', max);
//   console.log('min:', min);
  
// }
// getResultsByTests(getMaxValue, getMinValue, 'a@gmail.com', 1,1,1,1,1)
// getResultsByTests(getMaxValue, getMinValue, 'b@gmail.com', 2,1,4,1,0)

// //Callbacks
// function getMaxValue(arr) {
//   return Math.max(...arr)
// }
// function getMinValue(arr) {
//   return Math.min(...arr)
// }

// EXAMPLE 3

// const getF = (count, callback) => {
//   let firstNum = 0;
//   let secondNum = 1;
//   const arrWithValues = [firstNum, secondNum]
//   // console.log(arrWithValues);
  
//   // получить массив с числами последовательности
//   console.log(arrWithValues);
//   for (let i = 3; i <= count; i++) {
//     let newNumber = firstNum + secondNum
//     console.log('newNumber:', newNumber);
//     firstNum = secondNum;
//     secondNum = newNumber;
//     arrWithValues.push(newNumber)
  
//   }
//     console.log(arrWithValues);
//   let result = callback(arrWithValues)
//   return result;
// }
// console.log('только четные', getF(18, getEvenValues));
// console.log('сумма всех', getF(7, getSum));

// // Callback
// function getEvenValues(arr) {
//   const arrValues = []
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       arrValues.push(num)
//     }
//   }
//   return arrValues;
// }

// function getSum(arr) {
//   let total = 0;
//   for (let i of arr) {
//     total += i;
//   }
//   return total;
// }

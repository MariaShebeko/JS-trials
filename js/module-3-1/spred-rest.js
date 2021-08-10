// SPREAD - распыление

// const numbers = [1, 2, 3, 4, 5, 6, 7, 85]
// console.log(Math.max(3, 6, 4, 8));
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// function getResult(a,b) {
//   let total = 0
//   console.log(arguments);
//   // сщздание нового массива через распыление исходного
//   const nums = [...arguments]

//   for (let num of nums) {
//     total += num;
//   }
  
//   return total
// }
// console.log(getResult(2,3,4,5,6));

// const first = [1, 2, 3]
// const cloneFirst = first.slice(1,2)
// console.log('cloneFirst', cloneFirst);

// const newArr = first.concat(cloneFirst)
// console.log(newArr);

// const spreadArr = [...first, 444, ...first.slice(1,2)]
// console.log(spreadArr);

// распыление объектов {...obj1, ...obj2}

const product = {
  title: 'Cake',
  name: 'Napoleon',
}

console.log(product);
const params = {
  category: 'sweets',
}

const newProduct = { ...product, price: 30, ...params }
console.log(newProduct);

console.log(product === newProduct);

// REST - сбор
// аргументы в функциях в полноценный массив

const getTotalResult = (...args) => {
  console.log(args);
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}
let result = getTotalResult(23, 45, 23, 45, 56, 15, 32, 43, 65)

// console.log(result);

  const scoresOfStudents = [];
function getResultsOfTests(mail, ...scores) {

  // console.log(scores);
  // console.log(mail);

  let totalScore = 0
  for (let score of scores) {
    totalScore += score;
  }
  // console.log('totalScore', totalScore);
  console.log(scoresOfStudents);

  const obj = {
    email: mail,
    score: totalScore,
  }
  // console.log(obj);
  scoresOfStudents.push(obj)
    console.log(scoresOfStudents);
  
  
  
}
getResultsOfTests('a@gmail.com', 1, 2, 3, 4, 4)
getResultsOfTests('b@gmail.com', 1, 2, 3, 4, 4)
getResultsOfTests('v@gmail.com', 1, 2, 3, 4, 4)
getResultsOfTests('c@gmail.com', 1, 2, 3, 4, 4)
getResultsOfTests('s@gmail.com', 1,2,3,4,4)

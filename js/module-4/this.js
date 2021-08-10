// const user = {
//   name: 'Maria',
//   age: 31,
//   showName() {
//     console.log(this.name);
    
//     const showAge = () => {
//       console.log(this.age);
      
//     }
//     showAge()
//   },
// };
// user.showName()

// console.log(this); // undefined with usestrict and module

// const newUser = {
//   name: 'Valera',
//   age: 40,
// }
// user.showName.call(newUser)
// const bestUser = {
//   name: 'Tolik',
//   age: 30,
// }
// user.showName.apply(bestUser)
// // CALL or APPLY

// function toSayHello(manager, group) {
//   console.log(`${this.name}, we are glad to see you! I am ${manager}, your manager. Your gropu is ${group}`)
// }
// toSayHello.call(bestUser, 'Alexandro', 37)
// toSayHello.apply(newUser, ['Alexandro', 37])


// BIND - создает копию функции
// const product = {
//   name: 'Banana',
//   price: 25,
//   changePrice(value) {
//     return (this.price = value)
//   },
// }
// const fruit = {
//   name: 'Pineapple',
//   price: 50,
// }
// function showProduct(product, callback) {
//   let price = callback()
//   console.log(`${product} cost ${price}`);
  
// }
// showProduct('Orange', product.changePrice.bind(product, 20))
// showProduct(fruit.name, product.changePrice.bind(fruit, 99))


// 1

// function every(array, callback) {
//   const results = []
//   for (const elem of array) {
//     let condition = callback(elem)
//     // console.log(condition);
//     results.push(condition)
//   }
//   console.log(results);
//   if (results.includes(false)) {
//     return false
//   } else {
//     return true
//   }
// }
// let result = every([1, 11, 111, 2, 22, 33], getLessThenTen)
// console.log(result);

// function getLessThenTen(number) {
//   if (number < 10) {
//     return true
//   } else {
//     return false
//   }
// }

// 2

// function compact(array, callback) {
//   const newArray = []
//   for (let value of array) {
//     console.log(Boolean(value));
//     callback(value, newArray)
//     // if (Boolean(value)) newArray.push(value)
//   }
//   return newArray
// }

// function getFalsyValues(element, falsyValues) {
//   if (!Boolean(element)) falsyValues.push(element)
  
// }

// function getNotFalsyValues(element, notfalsyValues) {
//   if (Boolean(element)) notfalsyValues.push(element) 
// }

// console.log(compact([1,0,'',null,'Hello'], getFalsyValues));
// console.log(compact([1,0,'',null,'Hello'], getNotFalsyValues));

// 3

const orderA = [
  { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0, },
  { name: 'Computer', price: 230000, deliveryProgress: 50, type: 1, },
  {name: 'Tablet', price: 5000, deliveryProgress: null, type: 2,},
]

const orderB = [
  { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0, },
  {name: 'Tablet', price: 5000, deliveryProgress: null, type: 2,},
]

function showDeliverStatus(array) {
  let message;
  let progress;
  const results = [];
  
  for (let order of array) {

    progress = order.deliveryProgress

    if (progress === 100) {
      message = `Done`;
      results.push(message);
    } else if (progress < 100 ??) {
      message = `In progress` // <100
      results.push(message)
    } else if (progress === null) {
      message = `ready for delivery` // null
      results.push(message)
    } else {
      message = `Not Ordered` // null
      results.push(message)
    }

    return results.join(', ')
  }
    
}
console.log(showDeliverStatus(orderA));

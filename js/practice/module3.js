// // 1
// // Создать объект товара со свойствами name, price, quantity и методами,
// //   которые показывают их текущее значение и методами, что изменяют их значения.

// const product = {
//   name: 'prod',
//   price: 0,
//   quantity: 0,
//   showName() {
//     console.log(this.name);
//   },
//   showPrice() {
//     console.log(this.price);
//   },
//   showQuantity() {
//     console.log(this.quantity);
//   },
//   changeName(value) {
//     return this.name = value;
//    },
//   changePrice(value) {
//     return this.price = value;
//    },
//   changeQuantity(value) {
//     return this.quantity = value;
//   },
//   updateQuantite(value, isCost) {
//     // if (isCost) {
//     //   return (this.quantity -= value)
//     // } else {
//     //   return (this.quantity += value)
//     // }
//     isCost ? this.quantity -= value : this.quantity += value;
//   }

//   // deleteProp(propName) {
//   //   delete this[propName]
//   // }
// }
// console.log(product);
// // product.deleteProp('name')

// //checkup
// product.showName();
// product.showPrice();
// product.showQuantity();

// product.changeName('Peach')
// product.changePrice(55)
// product.changeQuantity(3)

// product.updateQuantite(1, true)
// console.log(product);


// // 2 
// // добавь к объекту product метод, который высчитывает
// // стоимость общего количества текущего товара

// product.getTotalPrice = function () {
//   return this.price * this.quantity
// }
// console.log(product.getTotalPrice());

// // 3
// // Записать в переменную totalPrice общую стоимость всех товаров в массиве products

// const products = [
//   { name: 'Grape', price: 80, quantity: 2 },
//   { name: 'Banana', price: 30, quantity: 5 },
//   { name: 'Kiwi', price: 100, quantity: 1.5 },
// ]
// function getTotalPrice(arr) {

//   let totalPrice = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
//   totalPrice += arr[i].price * arr[i].quantity;
// }
// console.log(totalPrice);
// }
// getTotalPrice(products)

// 4
// Создать функцию, которая принимает массив продуктов, 
// название товара и его количество и выводит его стоимость,
//   если товара достаточно или сообщает о том, сто товара нет на складе
// в указанном количестве.
// написать функцию тремя способами(Expression, Declaration, Arrow)

const allProducts = [
  { name: 'bread', price: 20, quantity: 100 },
  { name: 'milk', price: 30, quantity: 24 },
  { name: 'cheese', price: 300, quantity: 10 },
  { name: 'chorizo', price: 560, quantity: 4 },
  { name: 'lemon', price: 60, quantity: 9 },
  { name: 'lavazza', price: 250, quantity: 24 },
]

// console.log(allProducts);

function getResponse(arr, prod, count) {
  // console.log(arr);
  for (let product of arr) {
    
    const { name, quantity, price } = product;

    if (prod === name) {
      console.log(`${prod} есть на складе`);
      
      return quantity >= count
        ? console.log(`${prod} можете купить за ${price * count}`)
        : console.log(`${prod} нет в достаточном количестве`);
        
    }
        
  }
  console.log(`${prod} нет такого товара на складе`);
}
      
    // if (prod === product.name) {
    //   console.log(`${prod} есть на складе`);
    //   if (product.quantity >= count) {

    //     let cost = product.price * count;
    //     console.log(`${prod} можете купить за ${cost}`);
        
    //   } else {
    //     console.log(`${prod} нет в достаточном количестве`);
        
    //   }
    // } else {
    //   console.log(`${prod} нет такого товара на складе`);
      
    // }

getResponse(allProducts, 'lavazza', 5)
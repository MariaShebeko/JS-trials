const product = {
  title: 'mask',
  price: 100,
  values: ['50ml', '30ml', '100ml'], 
}

function showTitle(name) {
  // console.log(`this product is ${name}`);
  
}
showTitle('Parfum')
// console.log(product.title);
showTitle(product.title)

const products = {
  parfums: {
    male: [
      {
        title: 'Home',
        name: 'Dior',
        price: 3000,
      },
    ],
    female: [
      {
        title: 'Jadore',
        name: 'Dior',
        price: 2900,
      },
    ],
  },
  masks: {},
}
// console.log(products.parfums.female[0].title);

// Distructuring
const { price, title, name } = products.parfums.female[0];
// console.log(title);
// console.log(name);
// console.log(price);

const { female, male } = products.parfums
// console.log(female, male);

// const user = {
//   login: 'nickname',
//   pass: 'qwe',
//   userInfo: {
//     email: '',
//     phone: '',
//   },
// }
// function sayHello(name) {
//   alert(`${name} Hello!`);
// }
// const { login } = user;

// sayHello(login)

const rgb = [255, 39, 45]
console.log(rgb);

// const [] = array

const [red, green, blue] = rgb;

console.log('red', red);
console.log('green', green);
console.log('blue', blue);





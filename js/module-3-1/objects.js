// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { ...a, x:10, y:10, z:20, ...b, z:30, };
// console.log(c);

// const profile = {
//   name: 'Jack',
//   tag: 'juke',
//   location: 'Ukraine',
//   avatar: 'https://somepicture.jpg',
//   stats: {
//     followers: 1000,
//     views: 5000,
//     likes: 0,
//   },
// }

// console.log(profile);

// const { name, tag, location, ...restShit } = profile;

// console.log(name, tag, location);
// console.log(restShit);

const obj = {
  prop_a: "A",
  prop_b: "B",
  prop_c: 2,
  prop_d: null,
  prop_e: true,
  name: "Mariia",
  age: 31,
  isOnline: false,
  isStudent: true,
  skills: ["html", "css"],
  music: {
    bands: ["U2"],
    songs: ["song"],
  },
  
  //methods
  //ES5
  showName: function () {
    // console.log('hello');
    
  },
  //ES6
  showName() {
    // console.log('hello');
    
  },
}

// console.log(obj);

// полцчаем значения GET READ
// console.log('name:', obj.name);
// console.log('age:', obj.age);
// obj.showName()

// console.log(obj['name']);
// console.log(obj['age']);

// изменение свойства UPDATE
// console.log(obj.age);
obj.age = 18;
// console.log(obj.age);

// добавление свойства POST CREATE
// console.log(obj.languages);  // undefined - не задано значение
obj.languages = ['ukr', 'rus', 'eng'];
// console.log(obj.languages);

//удаление свойства DELETE (не желательно!)
delete obj.age
// console.log(obj.age);

// short props

let age = 30;
// age: 30,
// console.log(age);
const skills = ['html', 'css']

const myUser = {
  age,
  skills,
}

// console.log(myUser);

// вычисляемые свойства

let key1 = 'username'
let key2 = 'lastName'
let key3 = 'skills'

const nextUser = {
  studenName: 'user',
  [key1]: 'user',
}

// console.log(nextUser);

for (let prop in nextUser) {
  // console.log('key', prop);
  
}

const object = {}
for (let key in object) {
  // console.log('key', key);
  
}

const product = {
  price: 10,
}
// console.log(product);

const newProduct = Object.create(product)
// console.log(newProduct);

// newProduct.price = 100

for (let key in newProduct) {
  // console.log(key);
  // console.log(newProduct[key]);
  if (product.hasOwnProperty(key)) {
    // console.log('key of newProduct', key);
    
  }
}

// Object.keys(obj) - массив ключей
const myKeys = Object.keys(obj)
// console.log(myKeys);
// console.log(myKeys[0]); // key at index 0

// console.log(obj[myKeys[0]]); // A (string)

// Object.values(obj) - массив значений
const myValues = Object.values(obj)
// console.log(myValues);

const prod = {
  count: 2,
  price: 10,
}

const vals = Object.values(prod)
// console.log(vals);
const totalPrice = vals[0] * vals[1]
// console.log(totalPrice);


// Object.entries(obj) - многомерній массив в виде [[key1, value1], [key2, value2], [key3, value3]]
const myEntries = Object.entries(prod)
// console.log(myEntries);

// & methods
// this - контекст исполнения (заменяет обращение к объекту по имени)
let nickName = 'bla bla bla'
const user = {
  nickName: 'Super User',
  showUserName() {
    return `Hello, ${this.nickName}` 
  }
}

console.log(user.showUserName());

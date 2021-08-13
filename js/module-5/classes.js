// class Class {
//   // создаем свойства
//   constructor(prop1 = 0, prop2 = 1) {
//     this.prop1 = prop1;
//     this.prop2 = prop2;
//   }
//   // тут добавляем методы
//   // method: function (params) {} // ES5

//   method() {
//     console.log(this.prop1);
    
//   }
//   method2(value) {
//     return (this.prop2 = value)
//   }
// }

// EXAMPLES
// Исходный класс
class User {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }
  showLogin() {
    console.log(this.login);
    
  }
}
// Экземпляр исходного класса
const user1 = new User("user1", 'qweqwe')
console.log(user1);

// // Новый(наследуемый) на базе исходного
// class NewUser extends User {
//   constructor(name, age, login, password) {
//     // инициализируем исходній класс
//     super(login, password);
//     this.name = name;
//     this.age = age;
//   }
//   updateAge() {
//     return this.age +=1
//   }
// }
// // Экземпляр нового класса
// const newUser1 = new NewUser('Maria', 18, 'Masha', 'qweq')
// // console.log(newUser1);
// // console.log(newUser1.updateAge());

// // свойства-аксессоры getter & setter

// class BaseProduct {
//   constructor(title, price) {
//     this._title = title;
//     this._price = price;
//   }
//   // get & set
//   get price() {
//     return this._price
//   }
//   set price(value) {
//     return this._price = value
//   }

//   get title() {
//     return this._title
//    }
//   set title(value) {
//     return this._title = value
//   }
// }

// const baseProduct = new BaseProduct('Banana', 25)
// console.log(baseProduct);
// console.log('свойство _price', baseProduct._price);
// console.log('by getter price', baseProduct.price);
// baseProduct.price = 35
// console.log('by getter price', baseProduct.price);

// console.log('свойство _title', baseProduct._title); // ПЛОХО
// console.log('by getter title', baseProduct.title);
// baseProduct.title = 'Orange';
// console.log('by getter title', baseProduct.title);

// class Comment {
//   static name = "Anonim"
//   static showName() {
//     console.log(this.name);
    
//   }

//   constructor(author, text) {
//     this.author = author;
//     this.text = text;
//   }
// }
// const comment1 = new Comment('Pushkin', 'Lorem lorem')
// console.log(comment1);
// console.log(comment1.name); // undefined
// console.log(Comment.name);
// comment1.showName(); // Error - is not a function
// Comment.showName()

class BaseProduct {
  constructor(name, price, category) {
    this.name = name;
    this._price = price;
    this.category = category;
  }
  get price() {
    return this._price
  }
  set price(value) {
    return this._price = value;
  }
}

class WeightProduct extends BaseProduct {
  constructor(weight, name, price, category) {
    super(name, price, category)
    this.weight = weight;
  }
  getTotalCost() {
         console.log(this.weight * this._price);
  }
  
  decrWeight(value) {
    if (this.weight - value <= 0) {
      console.log('товара недостаточно на складе');
      
    } else {
      return this.weight -= value
    }
  }

  incWeight(value) {
    console.log('посли прихода товара:', this.weight +=value);
    
    return this.weight +=value
  }
}

const weightProduct = new WeightProduct(0.5, "Lemon", 30, 'fruits')
weightProduct.getTotalCost()
weightProduct.decrWeight(0.2)
weightProduct.incWeight(5)

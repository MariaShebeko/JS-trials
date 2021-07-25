let value = "px";

let toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

value = "123";
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

value = "";
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

value = " ";
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

value = true;
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

value = false;
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

value = undefined;
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

value = null;
toNumber = Number(value);
console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(`${value} через унарный +:`, toNumber);
console.log(typeof toNumber);

value = NaN;
// toNumber = Number(value);
// console.log(`${value} через конструктор Number():`, toNumber);
console.log(typeof value);


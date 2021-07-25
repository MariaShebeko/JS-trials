let value = 0;

let toString = String(value);
console.log(`${value}, значение через Стринг:`, toString);
console.log(`${value}, значение через Стринг:`, typeof toString);

toString = value + "";
console.log(`${value}, значение через конкатенацию:`, toString);
console.log(`${value}, значение через конкатенацию:`, typeof toString);

value = 1;

toString = String(value);
console.log(`${value} через конструктор Стринг():`, toString);
console.log(typeof toString);

toString = value + "";
console.log(`${value} через конкатенацию:`, toString);
console.log(typeof toString);

value = true;
toString = String(value);
console.log(`${value} через конструктор Стринг():`, toString);
console.log(typeof toString);

value = null;
toString = String(value);
console.log(`${value} через конструктор Стринг():`, toString);
console.log(typeof toString);

value = undefined;
toString = String(value);
console.log(`${value} через конструктор Стринг():`, toString);
console.log(typeof toString);






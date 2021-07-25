let value = "text";
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(typeof toBoolean);

value = 123;
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(typeof toBoolean);

value = "";
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(typeof toBoolean);

value = " ";
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(typeof toBoolean);

value = undefined;
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(typeof toBoolean);

value = null;
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(typeof toBoolean);

value = NaN;
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(typeof toBoolean);

value = Infinity;
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(typeof toBoolean);
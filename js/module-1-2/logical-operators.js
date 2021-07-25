// logical operators && || !

// console.log('I Love JavaScript' && 1);

// console.log('Love' && 1 && true);

// console.log(0 && 'Love && 1');

// console.log(0 && false && 1);

// let minPrice = 100;
// let maxPrice = 200;
// let currentPrice = 150

// if (currentPrice >= minPrice && currentPrice <= maxPrice) {
//     console.log(`этот товар я могу купить`);
// } else {
//     console.log(`эта цена не подходит`); 
// }

console.log('true' || true);

console.log('true' || false);

console.log(false || 0 || NaN);

let day = "mon"
if (day === "mon" ||
    day === "tue" ||
    day === "wed" ||
    day === "thu" ||
    day === "fri")
{
    console.log(`${day} - будний день`)
} else {
     console.log(`Это выходной!`) 
}

console.log(!true);
console.log(!0);
console.log(!"love");
console.log(!NaN);

let enterPrompt = null
if (!enterPrompt) {
    console.log(`Пользователь нажал отмена`);    
}

console.log(!!0);
console.log(!!1);













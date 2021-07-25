// Области видимости
const result = 1
if (result > 0) {
    let result = 111
    result += 10
    console.log("LOCAL:", result);  
}
console.log("GLOBAL:", result);

// ЦИКЛЫ

const max = 10
let y = 10
let i = 0

// while (y < max) {
//     y += 1
//     i+= 1
//     console.log(`итериция - ${i}`, y);   
// }

// do {
//     y += 1
//     i+= 1
//     console.log(`итериция - ${i}`, y);
// } while (y < max)

for (let i = 1; i <= 10; i+=1) {
    
    if (i % 2 === 0) {
        console.log(`continue ${i}`);
        continue
    }
}

for (let i = 1; i <= 10; i+=1) {
    
    if (i % 2 === 0) {
        console.log(`break ${i}`);
        break
    }
}
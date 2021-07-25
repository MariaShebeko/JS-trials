// Branching
// if (condition) {
//     statement
// }
let a = 2
// if (a > 0 && a <= 5) {
//     console.log(`0-5`);  
// } else if (a > 5 && a <= 10) {
//     console.log(`6-10`); 
// } else if (a > 10 && a <= 15) {
//     console.log(`11-15`);
// } else {
//     console.log(`more then 15`);
// }

switch (!!a) {
    case a > 0 && a <= 5:
        console.log(`0-5`)
        break
    case a > 5 && a <= 10:
        console.log(`5-10`)
        break
    case a > 10 && a <= 15:
        console.log(`11-15`)
        break
    default:
        console.log(`more then 15`)
}

// let day = 'mon'
// switch (day) {
//     case 'mon':
//         console.log(`${day} - будний день`);
//         break
//     case 'tue':
//         console.log(`${day} - будний день`);
//         break
//     case 'wed':
//         console.log(`${day} - будний день`);
//         break
//     case 'thu':
//         console.log(`${day} - будний день`);
//         break
//     case 'fri':
//         console.log(`${day} - будний день`);
//         break
//     default:
//         console.log(`это выходной`);
// }

// switch (day) {
//     case 'mon':
//     case 'tue':
//     case 'wed':
//     case 'thu':
//     case 'fri':
//         console.log(`${day} - будний день`);
//         break
//     default:
//         console.log(`это выходной`);
// }
// тернарный оператор (condition) ? true : false

// let age = 24
// if (age >= 18) {
//     console.log(`adult`);
// } else {
//     console.log(`child`);
// }

// age >= 18 ? console.log(`adult`) : console.log(`child`);


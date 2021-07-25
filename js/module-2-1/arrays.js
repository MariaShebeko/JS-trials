// create (post) new array
const array = [1, 2, 3, 4, 'JavaScript', 5]
// console.log(array);

// read (get) element by arrays
// console.log(array[0]);
// console.log(array[4]);

// update (patch) element in array
// array[0] = 'I Love'
// console.log(array);

// delete element in array

delete array[1]
delete array[2]
console.log(array);

// add elem by index
array[1] = 'html'
array[2] = 'css'
console.log(array);

// iterate by array (for & for...of)

// for (let i = 0; i < array.length; i += 1) {

//   if (typeof array[i] === 'string') {
      
//     continue
//   }
//     console.log(`iteration ${i +1}`, array[i]);
// }

// multidimensional arrays

// const multiArray = [
//   [1, 10, 100, 1000],
//   [2, 20, 200, 2000],
//   [3, 30, 300, 3000],
// ]
// console.log(multiArray.length);
// console.log(multiArray[0]);

// let it = 1
// for (let array of multiArray) {

//   console.log(`iteration - ${it}`, array);
//   it +=1
//   for (let xxx of array) {
//     console.log(xxx);
    
//   }
// }

// const numbers = [12, 23, 34, 45]
// console.log(numbers);

// const myNumbers = numbers;
// console.log(`myNumbers`, myNumbers);

// numbers[0] = 100500
// console.log(numbers);
// console.log(`myNumbers`, myNumbers);

// Array Methods
// const numbers = [12, 23, 34, 45]

// const mySliceNumbers = numbers.slice()
// console.log(mySliceNumbers);

// const firstTwoElems = numbers.slice(0, 2)
// console.log(firstTwoElems);

let myString = 'my String'
// console.log(typeof myString);
// console.log(myString[0]);
// console.log(myString[1]);
// console.log(myString[2]);

// const arrayFromString1 = myString.split(' ')
// console.log(arrayFromString1);

// const arrayFromString2 = myString.split('')
// console.log(arrayFromString2);

// const arrayFromString3 = myString.split('S')
// console.log(arrayFromString3);


// const myArray = ['I', 'love', 'JavaScript']
// // console.log(myArray.length);

// // let arrayToString = myArray.join(' ');
// // console.log(arrayToString);

// // let arrayToString2 = myArray.join('-');
// // console.log(arrayToString2);

// console.log('myArray', myArray);

// console.log('myString', myString);

// const exampleArray = [1, 1, 2, 3, 4, 4]
// console.log(exampleArray);

// const unshiftElem = exampleArray.unshift(0, 0);
// console.log(unshiftElem);
// console.log();
// console.log(exampleArray);

// const pushElem = exampleArray.push(5, 5);
// console.log(pushElem);
// console.log(exampleArray);

// const shiftElem = exampleArray.shift();
// console.log(shiftElem); //удаленный элемент
// console.log(exampleArray);

// const popElem = exampleArray.pop()
// console.log(popElem); //удаленный элемент
// console.log(exampleArray);

// let deleteElement = exampleArray.splice(1, 1);
// console.log(deleteElement); //удаленный элемент

// console.log(exampleArray);

// перед индексом удаляем 0 элементов и вставляем эл.
// let addSplice = exampleArray.splice(1, 0, 'I', 'Love', 'JS')
// console.log(addSplice);
// console.log(exampleArray);

// let replaceSplise = exampleArray.splice(7, 1, 'React', 'Node')
// console.log(replaceSplise);
// console.log(exampleArray);

const firstPiece = [1, 2];
console.log(firstPiece);
const secondPiece = [3, 4];
console.log(secondPiece);

const thirdPiece = [5, 6];
console.log(thirdPiece);

const fullArray = firstPiece.concat(secondPiece, thirdPiece)

console.log(fullArray);



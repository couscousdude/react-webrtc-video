// You have an array of integers
// you need to make a function that adds 3 to every single number, and then returns the new array

const intArr = [2, 56, 752345, 2545, 235245, 1221];

// function arrAdder(arr) {
//     const newArr = [];

//     for (let i=0; i <= arr.length - 1; i++) {
//         newArr.push(arr[i] + 3);
//     }
//     return newArr;  
// } 

// console.log(arrAdder(intArr));


console.log(intArr.map(function(num) { return num += 3 }));
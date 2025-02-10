// const doubleTheNums = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] *= 2;
//     }
//     return arr;
// };

// console.log(doubleTheNums.name)

// convert above function to an arrow function
const doubleTheNums = arr => {
	for (let i = 0; i < arr.length; i++) {
			arr[i] *= 2;
	}
	return arr;
};

let list1 = [1,2,3,4];
console.log(doubleTheNums(list1));

// const fn = (arg0, arg1) => (arg0 <= arg1) ? arg0 : arg1

console.log(doubleTheNums.name);
// Write a function that prints out "Good morning, class!"
// const greeting = () => console.log('Good morning, class!');

(() => console.log('Good morning, class!'))();

// console.log(greeting());
// Write a function that prints a random number (integer) between 1 and 100.

const randomNum = () => {
	randNum = Math.floor(Math.random() * 100) + 1;
	console.log(randNum);
}
randomNum()
// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
    for (let i = 0; i < numTimes; i++) {
        console.log(action());
    }
};

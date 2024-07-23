const myArray = [95, 57, 27, 58, 59, 23, 30, 11, 82, 99];
myArray.sort((a, b) => b - a);


const age = 25; 
const canEnter = age >= 21 ? 'yes' : 'no';
console.log(canEnter);

const number = 4;
const sum = 4 % 4;
const answer = sum === 1 ? "That's 1" : "That's more or lower then 1";
console.log(sum, answer);

myArray.push(72, 48, 71,33, 88, 91, 100, 98, 63, 36, 1, 10, 18, 43)
const odds = myArray.filter((nums) => nums % 2 === 1);
const even = myArray.filter((nums) => nums % 2 === 0);
const value = myArray.length;
console.log(sum); 
console.log(myArray);
console.log(odds);
console.log(even);
console.log('Array value: ', value);

const middleIndex = Math.floor(myArray.length / 2);
const firstHalf = myArray.slice(0, middleIndex);
const secondHalf = myArray.slice(middleIndex); 

console.log('First half: ', firstHalf);
console.log('Second half: ', secondHalf);

const halfOdd = firstHalf.filter((num) => num % 2 === 1);
const halfEven = secondHalf.filter((num) => num % 2 === 0);



console.log('Halved with odds: ', halfOdd);
console.log('Halved with evens: ', halfEven); 
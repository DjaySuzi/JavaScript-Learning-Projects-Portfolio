//Create a variable named myAge, and set it equal to your age as a number
const myAge = 33;
//The first two years of a dog’s life count as 10.5 dog years each - value saved to this variable will change
let earlyYears = 2;
earlyYears *= 10.5;
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it - value saved to this variable will change
let laterYears = myAge - 2;
//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears *= 4;
console.log(earlyYears, laterYears);
console.log(laterYears);
//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
const myAgeInDogYears = earlyYears + laterYears;
const myName = 'Don'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

//Allow user to set name. Greet user with or without name via ternary expression
let userName = "Don";
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
//Allow user to ask question. Use math.floor to round numbers and math.random to randomly generate 0 or 1. Multiply 0 or 1 by 8 to run through 0-7 (8 spaces).
let userQuestion = "Will the Cardinals win the superbowl?";
console.log(userQuestion)
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
//use switch to set randomNumber answers
switch (randomNumber) {
case 0: 
console.log('Absolutely!');
break;
case 1:
console.log('There\'s a good chance!');
break;
case 2:
console.log('Bathroom break. Brb.');
break;
case 3:
console.log('That\'s a tough one. Let me think on it.');
break;
case 4:
console.log('I wouldn\'t count on it.');
break;
case 5:
console.log('That\'s not going to happen.');
break;
case 6:
console.log('I don\'t think so.');
break;
case 7:
console.log('That just might happen.');
break;
}
console.log(eightBall);
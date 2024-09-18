//use if else to compare choices and determine winner
//Get the user's choice. Declare input with empty string ''. Make sure choice is valid. Use .toLowerCase so input is not case sensitive.
const getUserChoice = userInput => (userInput.toLowerCase() === 'rock' || userInput.toLowerCase() === 'paper' || userInput.toLowerCase() === 'scissors' || userInput.toLowerCase() === 'bomb') ? userInput : console.log("That's not a valid input.");

/*
Alt multi-block:
const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput
 } else {
  console.log("That's not a valid input.");
 }
};
*/

//Get the computer's choice. Math.random to generate odds * 3 because 3 choices. Use Math.floor to round down to whole number. Make funcion because MATH.
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
  }
};
//Used switch for returns. Returns stop runs so breaks not needed.

//if no winner = draw. Use if else to compare choices and determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
  return 'This match ended in a draw.';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Paper covers rock. You got smothered and lost this one.';
   } else {
      return 'Rock smashes scissors. You smashed it home with a win!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'Scissors cut paper. The computer cut you to pieces.';
    } else {
      return 'Paper covers rock. The computer can\'t breathe from your success!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return 'Rock smashes scissors. The computer smashed your blades.';
    } else {
      return 'Scissors cut paper. The computer is all out of paper!';
    }
  }
  if (userChoice === 'bomb') {
    return 'Secret code activate. You BLEW away the computer.';
  }
};

//set up user and computer choices. Edit get user choice to play.
const playGame = () => {
const userChoice = getUserChoice('scissors');
const computerChoice = getComputerChoice('');
console.log(`You selected: ${userChoice}`);
console.log(`The computer selected: ${computerChoice}`);

console.log(determineWinner(userChoice, computerChoice));
};

//play function here
playGame(); 

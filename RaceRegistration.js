let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 22;
if (registeredEarly && runnersAge > 18) {
  raceNumber += 1000;
console.log(`Adult racer #${raceNumber}. Your race will begin at 9:30 a.m. local time.`)
} else if (runnersAge > 18) {
console.log(`Adult racer #${raceNumber}. Since you registered late, your race will begin at 11:00 a.m. local time.`)
} else if (runnersAge < 18) {
  console.log(`Youth racer #${raceNumber}. Your race will begin at 12:30 p.m. local time.`)
} else {
  console.log('Please complete your registration at the registration desk.')
}

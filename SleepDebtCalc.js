//get sleep hours per day param via function. Switch per day return hours. toLowerCase to excuse caps.
const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
    return 8;
    case 'tuesday':
    return 7;
    case 'wednesday':
    return 6;
    case 'thursday':
    return 5;
    case 'friday':
    return 7.5;
    case 'saturday':
    return 9;
    case 'sunday':
    return 8.5;
  }
};
/*
1. total actual sleep hours
2. ideal sleep hours
3. sleep debt, if any
*/
//Add actual sleep hours set by switch into new function
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
//single expression allows for implicit return
console.log(`You got ${getActualSleepHours()} hours of sleep this week.`);
//Set ideal hours per night. Mult by 7 to sub for days of week.
const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
}
//Sleep debt should be ideal - actual via function. Set return logs based on overage / deficit.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('You\'ve been getting exactly the sleep you need. Keep up the great work!');
  } else if (actualSleepHours > idealSleepHours){
    const overSleepHours = actualSleepHours - idealSleepHours;
    console.log(`Watch out! You've gotten ${overSleepHours} more hours of sleep than you needed. You might want to dial it back a bit.`);
  } else if (actualSleepHours < idealSleepHours) {
    const underSleepHours = idealSleepHours - actualSleepHours;
    console.log(`You could have used ${underSleepHours} more hours of sleep. Your body and mind will thank you later.`);
  } else {
    console.log('Are you even sleeping?!');
  }
};
//log net here
calculateSleepDebt();

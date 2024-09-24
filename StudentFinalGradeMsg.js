//function used to calc class score average
function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

//switch function converts score to grade
const getGrade = score => {
switch (true) {
  case score === 100:
  return 'A++';
  case score >= 90:
  return 'A';
  case score >= 80:
  return 'B';
  case score >= 70:
  return 'C';
  case score >= 60:
  return 'D';
  default:
  return 'F';
}
};

//boolean function for passing
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

//1. student personalized message based on results. Use prior functions in message.
//2. use getAverage function for total scores and getGrade function for student score. Make these paraments to student message function.
//3. studentMsg = Class average: getAverage(totalScores). Your grade: getGrade(studentScore). You passed / failed the course.
function studentMsg(totalScores, studentScore) {
if (hasPassingGrade(studentScore)){
  return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
} else {
  return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
}
}

//test via log student message function with array of total scores , student individual score
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

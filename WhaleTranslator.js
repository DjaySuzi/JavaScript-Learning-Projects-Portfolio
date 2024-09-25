//change quoted input variable to translate English into whale speech
const input = "What does a whale do when there's rain and thunder?";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for (let i = 0; i < input.length; i++){
  for (let v = 0; v < vowels.length; v++){
    if (input[i] === vowels[v]){
//can push into either variable. Doesn't matter.
      resultArray.push(input[i]);
    }
  }
    if (input[i] === 'e'){
      resultArray.push(input[i]);
    }
    if (input[i] === 'u'){
      resultArray.push(input[i]);
    }
}
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);

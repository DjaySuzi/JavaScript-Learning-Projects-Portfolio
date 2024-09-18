//kelvin will stay constant
const kelvin = 0;
//celsius = kelvin - 273
const celsius = kelvin - 273;
//Fahrenheit = Celsius * (9/5) + 32
const fahrenheit = celsius *(9/5) + 32;
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit.`);
//Newton = Celsius * (33/100)
const newton = celsius * (33/100);
console.log(`The Newton temperature is ${Math.floor(newton)}.`)

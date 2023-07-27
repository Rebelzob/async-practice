const sum = (num1, num2) => {
  return num1 + num2;
}

const mult = (num1, num2) => {
  return num1 * num2;
}

const ifEqual = (num1, num2) => {
  if (num1 !== num2) {
    return `${num1} is not equal to ${num2}`;
  }
  else {
    return `${num1} is equal to ${num2}`;
  }
}

const ifDivisible = (num1, num2) => {
  if ((num1 % num2) === 0) {
    return `${num1} is divisible by ${num2}`;
  }
  else {
    return `${num1} is not divisible by ${num2}`;
  }
}

const calc = (num1, num2, callback) => {
  return callback(num1, num2);
}

const greetings = (name) => {
  console.log(`Hello ${name}`);
}

setTimeout(greetings, 2000, 'Sasha');

console.log(calc(2, 10, sum));
console.log(calc(2, 10, mult));
console.log(calc(2, 10, ifEqual));
console.log(calc(4, 4, ifEqual));
console.log(calc(4, 4, ifDivisible));
console.log(calc(4, 3, ifDivisible));

const inputNumber = Number(process.argv.slice(2)[0]);

function evenOrOdd(number) {
  if (isNaN(number)) {
    return "Please enter a number.";
  } else if (number % 2 === 0) {
    return "even";
  } else if (number % 2 !== 0) {
    return "odd";
  } else {
    return "undefined";
  }
}

console.log(evenOrOdd(inputNumber));

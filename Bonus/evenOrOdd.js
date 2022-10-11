const inputNumber = Number(process.argv.slice(2)[0]);

function evenOrOdd(number) {
  if (isNaN(number)) {
    return "Please enter a number.";
  } else if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOrOdd(inputNumber));

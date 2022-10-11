const operands = process.argv.slice(2);
const result = operands.reduce((a, b) => Number(a) + Number(b), 0);

console.log(`The result is ${isNaN(result) ? 0 : result}`);

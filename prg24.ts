function checkEvenOrOdd(num: number): string {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
}

// Example usage
const number = 7;
console.log(checkEvenOrOdd(number));

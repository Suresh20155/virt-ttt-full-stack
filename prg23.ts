function findAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0; // Avoid division by zero
  }

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

// Example usage
const numberList = [10, 20, 30, 40, 50];
const average = findAverage(numberList);

console.log("List of numbers:", numberList);
console.log("Average:", average);

function sumMatchingElements(arr: number[], target: number): number {
  let total = 0;

  for (let num of arr) {
    if (num === target) {
      total += num;
    }
  }

  return total;
}

// Example usage
const numbers = [3, 5, 3, 2, 3, 7, 5];
const targetValue = 3;

console.log(`Sum of all ${targetValue}'s: ${sumMatchingElements(numbers, targetValue)}`);
// Output: Sum of all 3's: 9

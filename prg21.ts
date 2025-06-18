function sortArrayAscending(arr: number[]): number[] {
  return arr.slice().sort((a, b) => a - b);
}

const numbers = [42, 5, 19, 1, 77, 13];
const sorted = sortArrayAscending(numbers);

console.log("Sorted array:", sorted);

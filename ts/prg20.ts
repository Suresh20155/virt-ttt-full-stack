function findMaxElement(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const numbers = [10, 45, 3, 99, 28];
const max = findMaxElement(numbers);
console.log("Maximum element:", max);

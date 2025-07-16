function reverseArray<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}

const originalArray = [1, 2, 3, 4, 5];
const reversed = reverseArray(originalArray);

console.log("Original:", originalArray);
console.log("Reversed:", reversed);

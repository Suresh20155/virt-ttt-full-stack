function countCharOccurrence(text: string, targetChar: string): number {
  let count = 0;

  for (let char of text) {
    if (char === targetChar) {
      count++;
    }
  }

  return count;
}

// Example usage
const str = "suresh";
const target = "s";

console.log(`'${target}' occurs ${countCharOccurrence(str, target)} times.`);
// Output: 's' occurs 2 times.

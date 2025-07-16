function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// Example usage
const suresh = "suresh";
const reversed = reverseString(suresh);

console.log("Original String:",suresh);
console.log("Reversed String:", reversed);

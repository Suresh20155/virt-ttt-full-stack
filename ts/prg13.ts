function countDigits(str: string): number {
  const digits = str.match(/\d/g); // \d matches digits [0-9]
  return digits ? digits.length : 0;
}

// Example usage with "numerical digits"
const input = "111111111111111111";
const digitCount = countDigits(input);

console.log(`The string contains ${digitCount} digit(s).`);

function isPalindrome(str: string): boolean {
  // Clean the string: remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage with "thisisindia"
const test1 = "thisisindia";

console.log(`"${test1}" is palindrome?`, isPalindrome(test1));

function findNonMatchingChars(str1: string, str2: string): string[] {
  const nonMatching: string[] = [];

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (str2.indexOf(char) === -1) {
      nonMatching.push(char);
    }
  }

  return nonMatching;
}

// Example usage
const str1 = "suresh";
const str2 = "user";

const result = findNonMatchingChars(str1, str2);

console.log(`Characters in "${str1}" that are not in "${str2}":`, result);

function countVowels(str: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i].toLowerCase();
    if (vowels.indexOf(ch) !== -1) {
      count++;
    }
  }

  return count;
}

// Example usage
const input = "Suresh";
console.log(`Number of vowels in "${input}":`, countVowels(input));

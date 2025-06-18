function areAnagrams(str1: string, str2: string): boolean {
  // Remove spaces, convert to lowercase
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Sort characters and compare
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";

console.log(`Are "${string1}" and "${string2}" anagrams?`, areAnagrams(string1, string2));

function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {}; // Step 1: Initialize a frequency map

  // Step 2: Populate the frequency map
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 3: Find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Step 4: Handle cases with no non-repeated character or empty string
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

// STEP 1
// let name = prompt("Enter your name:");
// alert(`The length of your name is: ${name.length}`);

// STEP 2
// name = prompt("Enter your name:");
// let index = parseInt(prompt("Enter a number:"));
// alert(`The letter at position ${index} is: ${name.charAt(index)}`);

// // STEP 3
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// alert(`${firstName} ${lastName}`);

// // STEP 4
// let text = "The quick brown fox jumps over the lazy dog";
// alert(`The index of the word "fox" is: ${text.indexOf("fox")}`);

// // STEP 5
// let text = "The quick brown fox jumps over the lazy fox";
// alert(`The index of the last occurrence of the word "fox" is: ${text.lastIndexOf("fox")}`);

// // STEP 6
// let text = "The quick brown fox jumped over the lazy dog";
// let fullName = prompt("Enter your full name:");
// let replacedText = text.replace("the lazy dog", fullName);
// alert(`${replacedText}`);

// // STEP 7
// let text = "The quick brown fox jumps over the lazy dog";
// let wordToSearch = prompt("Enter a word to search for:");
// let searchResult = text.indexOf(wordToSearch);
// if (searchResult !== -1) {
//     alert(`The word "${wordToSearch}" was found at index: ${searchResult}`);
// } else {
//     alert(`The word "${wordToSearch}" was not found.`);
// }

// STEP 8
// let old = "The quick brown fox jumps over the lazy dog";
// let newString = old.slice(old.indexOf("the lazy dog"));
// alert(`${newString.toUpperCase()}`);

// // STEP 9
// let text = "      THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// let trim = text.trim().toLowerCase();
// alert(`${trim}`);

// // STEP 10
// let text = "the quick brown fox jumps over the lazy dog";
// let caps = text.charAt(0).toUpperCase() + text.slice(1);
// alert(`${caps}`);
//STEP 1
// function sort() {
//     let str = prompt("Enter a word:");
//     return str.split('').sort().join('');
// }
// console.log(`${sort()}`);

//STEP 2
// function caps() {
//     let str = prompt("Enter a sentance:");
//     return str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }
// console.log(`${caps()}`);

//STEP 3
// function count() {
//     let str = prompt("Enter a word:");
//     let vowels = str.match(/[aeiou]/gi);
//     return vowels ? vowels.length : 0;
// }
// console.log(`${count()}`);

//STEP 4
// function random() {
//     let length = parseInt(prompt("Enter a number:"));
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
// }
// console.log(`${random()}`);

//STEP 5
// function country() {
//     let countriesInput = prompt("Enter a list of country names separated by commas:");
//     let countries = countriesInput.split(',').map(country => country.trim());
//     return countries.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
// }
// console.log(`${country()}`);

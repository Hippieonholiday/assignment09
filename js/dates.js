//STEP 1
// let month = parseInt(prompt("Enter the month number:"));
// let year = parseInt(prompt("Enter the year:"));
// let days = new Date(year, month, 0).getDate();
// console.log(`${days}`);

//STEP 2
// let input = prompt("Enter a date:");
// let date = new Date(input);
// let month = date.toLocaleString('default', { month: 'long' });
// console.log(`${month}`);

//STEP 3
// input = prompt("Enter a date:");
// date = new Date(input);
// let weekend = date.getDay() === 0 || date.getDay() === 6;
// console.log(`${weekend ? "a weekend" : "not a weekend"}.`);

//STEP 4
// let today = new Date();
// let yesterday = new Date(today);
// yesterday.setDate(today.getDate() - 1);
// let day = yesterday.toLocaleString('default', { weekday: 'long' });
// console.log(`${day}`);

//STEP 5
// let day = new Date().toLocaleString('default', { weekday: 'long' });
// console.log(`${day.charAt(0)}`);
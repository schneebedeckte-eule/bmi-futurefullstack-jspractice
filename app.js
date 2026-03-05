// VARIABLES

let weight = parseInt(prompt("Enter your weight in kg"));
let height = parseInt(prompt("Enter your height in cm")) / 100;
let gender = prompt("Enter your gender as M or F");
let bmiCategory;

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let middleName = null;

//BMI CALCULATION
let bmi = weight / height ** 2;

//OUTPUT
console.log(bmi);

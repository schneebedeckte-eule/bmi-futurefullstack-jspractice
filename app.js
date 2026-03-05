// VARIABLES

let weight = parseInt(prompt("Enter your weight in kg"));
let height = parseInt(prompt("Enter your height in cm")) / 100;
let gender = prompt("Enter your gender as M or F");
let bmiCategory;

//BMI CALCULATION

let bmi = weight / height ** 2;

//OUTPUT
let result = `Your weight is ${weight}kg and your height is ${height * 100}cm or ${height}m. Therefore your BMI is ${bmi}.`;
console.log(result);

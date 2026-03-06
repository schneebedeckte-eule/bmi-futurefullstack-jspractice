// VARIABLES

let weight = parseInt(prompt("Enter your weight in kg"));
let height = parseInt(prompt("Enter your height in cm")) / 100;
// let gender = prompt("Enter your gender as M or F");
let bmiCategory;

//BMI CALCULATION

let bmi = weight / height ** 2;
let bmiRounded = bmi.toFixed(2);

if (bmi < 18.5) {
  bmiCategory = "Underweight";
} else if (bmi >= 18.5 && bmi < 25) {
  bmiCategory = "Healthy";
} else if (bmi >= 25 && bmi < 30) {
  bmiCategory = "Overweight";
} else if (bmi < 40) {
  bmiCategory = "Obese";
} else {
  bmiCategory = "severely Obese";
}

//OUTPUT

let result = `Your weight is ${weight}kg, your height is ${height * 100}cm or ${height}m. Therefore your BMI is ${bmiRounded} which is ${bmiCategory}.`;

console.log(result);

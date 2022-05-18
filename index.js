const form = document.getElementById("bmi-form");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const result = document.getElementById("result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const resBMI = calcBMI(weightEl.value, heightEl.value);

  result.innerHTML = reResult(resBMI) || "Error";
  heightEl.value = weightEl.value = "";
  weightEl.focus();
});
const calcBMI = (w, h) => {
  return (w / ((h * h) / 10000)).toFixed(1);
};
const reResult = (bmi) => {
  const checkBMI =
    bmi < 15
      ? "Very severely underweight: "
      : 15 <= bmi && bmi < 16
      ? "Severely underweight: "
      : 16 <= bmi && bmi < 18.5
      ? "Underweight: "
      : 18.5 <= bmi && bmi < 25
      ? "Normal (healthy weight): "
      : 25 <= bmi && bmi < 30
      ? "Overweight: "
      : 30 <= bmi && bmi < 35
      ? "Moderately obese: "
      : 35 <= bmi && bmi < 40
      ? "Severely obese: "
      : bmi >= 40
      ? "Very severely obese: "
      : "Invail BMI: ";
  return checkBMI + bmi;
};

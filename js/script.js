var baseValues = {
  shepherdDog: {
    lessOne: 600,
    oneToFive: 800,
    moreFive: 700,
  },
  labrador: {
    lessOne: 500,
    oneToFive: 700,
    moreFive: 400,
  },
};
window.addEventListener("DOMContentLoaded", function () {
  calculator();
});
var calculator = function () {
  var formEl = document.querySelector(".calculator__form"),
    breedSelect = formEl.querySelector('[name="breed"]'),
    ageSelect = formEl.querySelector('[name="age"]'),
    activityRadioBtns = formEl.querySelectorAll('[name="activity"]'),
    weightInp = formEl.querySelector('[name="weight"]'),
    resultText = document.querySelector(".calculator__result span");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var breed = breedSelect.value,
      age = ageSelect.value,
      weight = weightInp.value;
    var activity = "";
    activityRadioBtns.forEach(function (radioBtn) {
      if (radioBtn.checked) {
        activity = radioBtn.value;
      }
    });
    resultText.textContent = getResult(breed, age, activity, +weight);
    createResetBtn();
  });
  var resetForm = function () {
    breedSelect.value = "";
    ageSelect.value = "";
    weightInp.value = "";
    activityRadioBtns.forEach(function (radioBtn) {
      radioBtn.checked = false;
    });
    resultText.textContent = "0";
  };
  var createResetBtn = function () {
    if (formEl.parentElement.querySelector(".calculator__button--reset")) {
      return;
    }
    var resetBtn = document.createElement("button");
    resetBtn.classList.add("calculator__button", "calculator__button--reset");
    resetBtn.textContent = "Сбросить";
    resetBtn.addEventListener("click", function () {
      resetForm();
      resetBtn.remove();
    });
    formEl.parentElement.insertAdjacentElement("beforeend", resetBtn);
  };
};
var getResult = function (breed, age, activity, weight) {
  var result = baseValues[breed][age];
  if (weight > 5 && weight <= 10) {
    result *= 1.2;
  } else if (weight > 10 && weight <= 20) {
    result *= 1.3;
  } else if (weight > 20 && weight <= 30) {
    result *= 1.4;
  }
  if (activity == "active") {
    result *= 1.3;
  }
  return Math.round(result).toString();
};

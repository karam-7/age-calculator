const dateInput = document.getElementById("date");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayError = document.getElementById("dayError");
const dayError1 = document.getElementById("dayError1");
const monthError = document.getElementById("monthError");
const monthError1 = document.getElementById("monthError1");
const yearError = document.getElementById("yearError");
const yearError1 = document.getElementById("yearError1");
const year1 = document.getElementById("year1");
const month1 = document.getElementById("month1");
const day1 = document.getElementById("day1");
const btn = document.getElementById("btn");
 
function showError(element, error) {
  element.style.borderColor = "hsl(0, 100%, 67%)";
  element.nextElementSibling.style.display = "block";
  element.nextElementSibling.textContent = error;
  if (element.id === "date") {
    document.getElementById("daySpan").style.color = "hsl(0, 100%, 67%)";
  } else if (element.id === "month") {
    document.getElementById("monthSpan").style.color = "hsl(0, 100%, 67%)";
  } else if (element.id === "year") {
    document.getElementById("yearSpan").style.color = "hsl(0, 100%, 67%)";
  }
}
 
function hideError(element) {
  element.style.borderColor = "hsl(0, 0%, 94%)";
  element.nextElementSibling.style.display = "none";
  element.nextElementSibling.textContent = "";
  if (element.id === "date") {
    document.getElementById("daySpan").style.color = "hsl(0, 1%, 44%)";
  } else if (element.id === "month") {
    document.getElementById("monthSpan").style.color = "hsl(0, 1%, 44%)";
  } else if (element.id === "year") {
    document.getElementById("yearSpan").style.color = "hsl(0, 1%, 44%)";
  }
}
 
dateInput.addEventListener("focus", () => {
  hideError(dateInput);
});
 
monthInput.addEventListener("focus", () => {
  hideError(monthInput);
});
 
yearInput.addEventListener("focus", () => {
  hideError(yearInput);
});
 
function isDayValid(day, month, year) {
  const date = new Date(year, month - 1, day);
  return date.getMonth() === month - 1 && date.getFullYear() === year;
}
 
btn.addEventListener("click", () => {
  const day = parseInt(dateInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  let ageYear = 0;
  let ageMonth = 0;
  let ageDay = 0;
 
  if (!day) {
    showError(dateInput, "This field is required");
  } else if (day <= 0 || day > 31 || !isDayValid(day, month, year)) {
    showError(dateInput, "Must be a valid day");
  } else {
    hideError(dateInput);
  }
 
  if (!month) {
    showError(monthInput, "This field is required");
  } else if (month <= 0 || month > 12) {
    showError(monthInput, "Must be a valid month");
  } else {
    hideError(monthInput);
  }
 
  if (!year) {
    showError(yearInput, "This field is required");
  } else if (year > currentYear) {
    showError(yearInput, "Must be a valid year");
  } else {
    hideError(yearInput);
  }
 
  if (day && month && year && year <= currentYear) {
    ageYear = currentYear - year;
    ageMonth = currentMonth - month;
    ageDay = currentDay - day;
 
    if (ageDay < 0) {
      ageMonth--;
      ageDay += new Date(year, month - 1, 0).getDate();
    }
 
    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }
 
    year1.textContent = ageYear;
    month1.textContent = ageMonth;
    day1.textContent = ageDay;
  }
});
 

// Contact page: checks the date and time against opening hours.
// Demo only: nothing is sent to a server.

const form = document.getElementById("appointment-form");
const dateInput = document.getElementById("appointment-date");
const timeInput = document.getElementById("appointment-time");
const formError = document.getElementById("form-error");
const successMessage = document.getElementById("success-message");

// Today's date in Jaipur as YYYY-MM-DD. The en-CA locale uses that format.
dateInput.min = new Date().toLocaleDateString("en-CA", {
  timeZone: "Asia/Kolkata",
});

function clearMessages() {
  formError.classList.add("hidden");
  formError.textContent = "";
  successMessage.classList.add("hidden");
}

function showError(message, field) {
  formError.textContent = message;
  formError.classList.remove("hidden");
  field.focus();
}

form.addEventListener("input", clearMessages);

// The browser has already checked required fields and types before this runs.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearMessages();

  // Adding T00:00 reads the date as local time, so getDay() returns the right day.
  const isSunday = new Date(dateInput.value + "T00:00").getDay() === 0;
  const openingTime = isSunday ? "11:00" : "10:00";
  const closingTime = isSunday ? "18:00" : "20:00";

  // 24-hour "HH:MM" strings sort in time order, so they can be compared directly.
  if (timeInput.value < openingTime || timeInput.value >= closingTime) {
    const hours = isSunday
      ? "Sunday, 11 AM to 6 PM"
      : "Monday to Saturday, 10 AM to 8 PM";

    showError("Please choose a time within our opening hours: " + hours + ".", timeInput);
    return;
  }

  form.reset();
  successMessage.classList.remove("hidden");
  successMessage.focus();
});

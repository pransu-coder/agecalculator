const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let year = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();
  
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      year--;
      month = 12 + month; // adjust month value
    }
  
    return { year, month };
  }
  
  function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
      alert("Please enter your birthday");
    } else {
      const { year, month } = getAge(birthdayValue);
      resultEl.innerText = `You are ${year} ${year > 1 ? "years" : "year"} and ${month} ${month > 1 ? "months" : "month"} old`;
    }
  }
btnEl.addEventListener("click", calculateAge);
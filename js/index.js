let year = document.querySelector("#year").value;
let month = document.querySelector("#month").value;
let day = document.querySelector("#day").value;

// validation of the day
function validateDay () {
const message = document.getElementById("errDay");
      console.log(message)
      message.innerHTML = "";
let day = document.getElementById("day").value;
try {
  if(day== "") throw "empty";
  day = Number(day);
  if(day > 31) throw "Invalid date";
  if(day <= 0) throw "Invalid date";
  if(day >= 1 && day <=29 && month=== 2 && (year = year%4) && (year != 100%4) && (year = year %400)) throw "valid date";

}
catch(err) {
  message.innerHTML = "Day is " + err;
 }
}
document.getElementById("day").addEventListener("change", validateDay)

// validate month
function validateMonth () {
  const message = document.getElementById("errMonth");
        console.log(message)
        message.innerHTML = "";
        let month = document.getElementById("month").value;
        try {
          if(month == "") throw "empty";
          month = Number(month);
          if(month <= 0) throw "Invalid month";
          if(month >12) throw "Invalid month";

        } catch(err) {
          message.innerHTML = "Month is" + err;
        }
}
document.getElementById("month").addEventListener("change",validateMonth)

// validate year
function validateYear() {
  const message = document.getElementById("errYear");
        console.log(message)
        message.innerHTML = "";
        let year = document.getElementById("year").value;
        try {
          if(year == "") throw "empty";
          year = Number(year);
          if(year < 1800) throw "Invalid year";
          if(month > 2022) throw "Invalid year";

        } catch(err) {
          message.innerHTML = "Year is" + err;
        }
}
document.getElementById("year").addEventListener("change",validateYear)


// days of the week
function dayOfTheWeek(){
  let DD = document.getElementById("day").value
  let MM = document.getElementById("month").value
  let YY = document.getElementById("year").value

       let dayOfTheWeek = new Date([DD, MM, YY].join("-")).getDay();
      console.log(dayOfTheWeek)
      return isNaN(dayOfTheWeek) ? null :
      ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayOfTheWeek];

}
























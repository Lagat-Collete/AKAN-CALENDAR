let year = document.querySelector("#year").value;
let month = document.querySelector("#month").value;
let day = document.querySelector("#day").value;

// validation of the day
const message = document.getElementById("errDay");
console.log(message)
message.innerHTML = "";
let day = document.getElementById("day").value;
try {
  if(day== "") throw "empty";
  day = Number(day);
  if(day > 31) throw "Invalid date";
  if(day <= 0) throw "Invalid date";
  if(day >29 && month=== 2) throw "Invalid date"
}
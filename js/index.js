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
  // if(day >= 1 && day <=29 && month=== 2 && (year = year%4) && (year != 100%4) && (year = year %400)) throw "valid date";

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

       let dayWeek = new Date([DD, MM, YY].join("-")).getDay();
      console.log(dayWeek)
      return isNaN(dayWeek) ? null :
      ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayWeek];

}

document.getElementById("submit").addEventListener("click",akanNames)
function akanNames(){
  console.log("akanName")
  
  let gender = document.querySelector('input[name="gender"]:checked')?.value
  let day = dayOfWeek()
  let message =document.getElementById("feedback")
  message.innerHTML = ""
  console.log(gender)
  if (document.querySelector("#day").value == ""){
    validateDay();

  }
  if (document.querySelector("#month").value == ""){
    validateMonth();

  }
  if (document.querySelector("#year").value == ""){
    validateYear();
  }
  if(gender == null) {
    const errMessage =document.getElementById("errGender")
    errMessage.innerHTML = "";
    try {
      if(gender == null) throw "choose gender!";
    }
    catch(err) {
      errMessage.innerHTML = "kindly " + err;
    }
    return
  }
  else{
    const errMessage = document.getElementById(errGender)
    errMessage.innerHTML = "";
  }
  if(gender == 'female'){
    if(day == 'Sunday'){
      message.innerHTML = "Akosua"
    }
    else if(day == 'Monday'){
      message.innerHTML = "Adwoa"
    }
    else if(day == 'Tuesday'){
      message.innerHTML = "Abenaa"
    }
    else if(day == 'Wednesday'){
      message.innerHTML = "Akua"
    }
    else if(day == 'Thursday'){
      message.innerHTML = "Yaa"
    }
    else if(day == 'Friday'){
      message.innerHTML = "Afua"
    }
    else if(day == 'Saturday'){
      message.innerHTML = "Ama"
    }
  }
else {
  if(day == 'Sunday'){
    message.innerHTML = " Kwasi"
  }
  else if(day == 'Monday'){
    message.innerHTML = " Kwadwo"
  }
  else if(day == 'Tuesday'){
    message.innerHTML = " Kwabena"
  }
  else if(day == 'Wednesday'){
    message.innerHTML = "Kwaku"
  }
  else if(day == 'Thursday'){
    message.innerHTML = "Yaw"
  }
  else if(day == 'Friday'){
    message.innerHTML = " Kofi"
  }
  else if(day == 'Saturday'){
    message.innerHTML = "Kwame"
  }

}
console.log(document.querySelectorAll('.none'))
const ps = document.querySelectorAll('.none')

for (var x = 0; x < ps.length; x++){
  ps[x].getElementsByClassName.display = 'block'
}
}
function clearForm(){
  document.querySelector("#day").value = "";
  document.querySelector("#month").value = "";
  document.querySelector("#year").value = "";
  document.querySelectorAll('input[name="gender"]').checked = false;

  const ps = document.querySelectorAll(".none");

  for (var x = 0; x < ps.length; x++) {
    ps[x].getElementsByClassName.display = "none";
    const radios = document.getElementsByName("gender");
    for (var i = 0; i < radios.length; i++) radios[i].checked = false;
  }
}
document.getElementById('clearform').addEventListener('click',clearForm)























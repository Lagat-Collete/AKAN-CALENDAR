//creating arrays for male and females names,and days of the week
let maleName = ["Kwasi", "Kwa", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


// find the date
function findDate() {
let year = document.getElementById("year").value;
let mm = document.getElementById("month").valu;
let dd = document.getElementById("day").value;
let gender = document.getElementById("gender");
// let cc = year.substring(0,2);
// let yy = year.substring(2,4);
let akanName = Math.floor((((Number(year.slice(0,2))cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd ) %7);
// validate the form
if (dd <= 0 || dd=="" || dd>31) {
  alert("invalid date")

} else if (mm <= 0 || mm=="" || mm>12) {
  alert("invalid month");
} 
if (gender === "male"){
  alert("Your Akan name is " + maleName[akanName]);
} else if (gender === "female"){
  alert("your Akan name is" + femaleName[akanName]);
  console.log(dd,mm,gender,year);

}
}






















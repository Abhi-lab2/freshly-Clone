document.querySelector("form").addEventListener("submit", myFunction);
var signupArr = JSON.parse(localStorage.getItem("signupDetails")) || [];
//   console.log(signupArr)

function myFunction(event) {
  event.preventDefault();
  var userName = document.querySelector("#mail").value;
  var pswd = document.querySelector("#input_2").value;

  var signupObj = {
    name: userName,
    password: pswd,
  };
  signupArr.push(signupObj);
  localStorage.setItem("signupDetails", JSON.stringify(signupArr));
  // alert("signup success");
  window.location.href = "plan.html";
} 
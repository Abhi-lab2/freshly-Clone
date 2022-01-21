document.querySelector("form").addEventListener("submit",logIn)
var userDetails = JSON.parse(localStorage.getItem("signupDetails"))


 function logIn(event){
 event.preventDefault();
 var userName = document.querySelector("#main").value;
 var pswd = document.querySelector("#pass").value;
 
var flag=true;
 for(var i = 0; i<userDetails.length;i++){
     
     if(userDetails[i].name==userName&&userDetails[i].password==pswd){
 
         window.location.href="plan.html"
         break;
      }else{
          var flag = false;
      }
    }

    // if(flag==false){
    //     alert("password or username was incorrect");
    // }
     
         
     
 

 }
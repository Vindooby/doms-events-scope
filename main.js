Question 1//

function button1(click) {
document.getElementById('response').innerText = "I'm right!";
}

function button2(click) {
document.getElementById('response').innerText = "No I'm right!"
}


Question 2//


document.getElementById("hoverme").addEventListener("mouseenter",function(){
  alert("Hey,I told you not to hover over me")
})


// Question 3//
    var bruins=document.getElementById("formh1")

    window.addEventListener("keypress",function(event){
      console.log(event)
    bruins.innerHTML=event.key
    })

Question 4//
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var form = document.getElementById("form")
function checkForm(){

  if (password == 12345678) {
        if (username.length > 1) {
            document.getElementById('formh1').innerHTML = "Congrats on knowing
your user name and password"//;
        } else {
            alert("Incorrect username");
        }
    } else {
        alert("Incorrect password");
    }
}

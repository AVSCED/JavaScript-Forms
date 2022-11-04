var age;
var weight;
// Function to recieve output from the user
function healthCheck() {
  var flag = 2;
  var form = document.getElementById("myForm");
  //To Prevent Form From Refreshing the page onclick Submit button
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);
  //To typecaste the user's input into number type for computation
  age = Number(document.getElementById("age").value);
  weight = Number(document.getElementById("weight").value);
  // To check what slab does the user's weight lies in ?
  if (age == 0 || weight == 0) {
    alert("Please Enter the Remaining Fields!");
  } else {
    if (age <= 7) {
      if (weight >= 15 && weight <= 20) {
        flag = 1;
      }
    }
    if (age > 7 && age <= 10) {
      if (weight >= 20 && weight <= 25) {
        flag = 1;
      }
    }
    if (age > 10 && age <= 15) {
      if (weight >= 25 && weight <= 30) {
        flag = 1;
      }
    }
    if (age > 15 && age <= 20) {
      if (weight >= 30 && weight <= 40) {
        flag = 1;
      }
    }
  }
  // Checking if any of the cases were executed and displaying appropriate msg
  if (flag == 1) {
    document.getElementById("message").innerHTML =
      "<span style='color:#3cb371'>You're in the Weight Range !</span>";
  } else if (flag == 0) {
    document.getElementById("message").innerHTML =
      "<span style='color:red'>You're Over Weight Consult a Doctor !</span>";
  }
}

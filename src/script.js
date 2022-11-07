var age;
var weight;
// Function to recieve output from the user
function healthCheck() {
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
    if (age >= 5 && age <= 7) {
      //Underweight If condition
      if (weight < 15) {
        document.getElementById("message").innerHTML =
          "<span style='color:red'>You're Under Weight !</span>";
      } //Condition to check if the weight is in the apppropriate range
      else if (weight >= 15 && weight <= 20) {
        document.getElementById("message").innerHTML =
          "<span style='color:#3cb371'>You're in the Weight Range !</span>";
      }// Overweight Condition
       else if (weight > 20) {
        document.getElementById("message").innerHTML =
          "<span style='color:red'>You're Over Weight Consult a Doctor !</span>";
      }
    }
    if (age > 7 && age <= 10) {
      //Underweight If condition
      if (weight < 20) {
        document.getElementById("message").innerHTML =
          "<span style='color:red'>You're Under Weight !</span>";
      }//Condition to check if the weight is in the apppropriate range 
      else if (weight >= 20 && weight <= 25) {
        document.getElementById("message").innerHTML =
          "<span style='color:#3cb371'>You're in the Weight Range !</span>";
      } else if (weight > 25) {
        document.getElementById("message").innerHTML =
          "<span style='color:red'>You're Over Weight Consult a Doctor !</span>";
      }
    }
    if (age > 10 && age <= 15) {
      //Underweight If condition
      if (weight < 25) {
        document.getElementById("message").innerHTML =
          "<span style='color:red'>You're Under Weight !</span>";
      }//Condition to check if the weight is in the apppropriate range
       else if (weight >= 25 && weight <= 30) {
        document.getElementById("message").innerHTML =
          "<span style='color:#3cb371'>You're in the Weight Range !</span>";
      }// Overweight Condition 
      else if (weight > 25) {
        document.getElementById("message").innerHTML =
          "<span style='color:red'>You're Over Weight Consult a Doctor !</span>";
      }
    }
    if (age > 15 && age <= 20) {
      //Underweight If condition
      if (weight < 30) {
        document.getElementById("message").innerHTML =
          "<span style='color:red'>You're Under Weight !</span>";
      }//Condition to check if the weight is in the apppropriate range
       else if (weight >= 30 && weight <= 40) {
        document.getElementById("message").innerHTML =
          "<span style='color:#3cb371'>You're in the Weight Range !</span>";
      }// Overweight Condition 
      else if (weight > 40) {
        document.getElementById("message").innerHTML =
          "<span style='color:red'>You're Over Weight Consult a Doctor !</span>";
      }
    }
  }
}

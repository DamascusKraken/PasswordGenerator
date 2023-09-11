


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
function generatePassword(){

  //variable userValid used as trigger to validate user input for password desired length.
var userValid;
  //while loop to validate user input
  do{
    //Obtains users desired length of password
    var userLength = prompt("What is the desired length of the password?\n " +
                            "(min. 8 characters. max. 128 characters)", "Enter length");
    
    if(userLength > 8 && userLength < 128){
      userValid = false;
      return userLength;
    }else{
      console.log(userLength);
      console.log(userValid);
      alert("Please enter a numeric value between 8 - 128? Thank you.")
    }
  
  } while (userValid = true );
  
//Users desire to add Upper case characters

  do{
    //Obtains users desire for upper case characters in password
    var upperCase = prompt("Would you like to include UPPER CASE characters in your password?" + 
                            "Enter 'yes' or 'no'");
    //Variable to hold userInput and convert answer to all lowercase to validate.
    var upperValid = upperCase.toLowerCase();

    if(upperValid === "yes"){}

    
  
  } while (userValid = true );

//Users desire to add Lower case characters
//Users desire to add Numeric characters
//Users desire to add Special characters
  
  
  }
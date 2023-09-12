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
  //Variable to hold selected criteria
  var criteria = "";

  //variable userValid used as trigger to validate user input for password desired length.
  var userValid;

  //'do-while' loop to validate user input
  do{
    console.log(userValid);
    //Obtains users desired length of password
    var userLength = prompt("What is the desired length of the password?\n " +
                            "(min. 8 characters. max. 128 characters)", "Enter length");
    
    //Validation conditional 'if' statement for password length
    if(userLength > 8 && userLength < 128){
      userLength;
      userValid = false;
      break;
      
    }else{
      console.log(userLength);
      console.log(userValid);
      alert("Please enter a numeric value between 8 - 128? Thank you.")
    }
  //end of 'do-while' loop
  } while (userValid = true );
  
  //Obtains users desire to add Upper case characters
  userValid = true;

  //'do-while' loop to validate user input
  do{
    //Obtains users desire for upper case characters in password
    var upperCase = prompt("Would you like to include UPPER CASE characters in your password? " + 
                            "Enter 'yes' or 'no'");
    //Variable to hold userInput and convert answer to all lowercase to validate.
    var upperValid = upperCase.toLowerCase();
    
    //Validation conditional 'if' statement for password criteria
    if(upperValid === "yes"){
      userValid = false;
      criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;

    } else if (upperValid === "no"){
        userValid = false;
        break;

    } else{
      alert("Please enter 'yes' or 'no'.");
    }
    
    // end of 'do-while' loop
  } while (userValid = true );

  //obtains Users desire to add Lower case characters
  //'do-while' loop to validate user input
  do{
    //Obtains users desire for lower case characters in password
    var lowerCase = prompt("Would you like to include LOWER CASE characters in your password? " + 
                            "Enter 'yes' or 'no'");
    //Variable to hold userInput and convert answer to all lowercase to validate.
    var lowerValid = lowerCase.toLowerCase();

    if(lowerValid  === "yes"){
      userValid = false;
      criteria += "abcdefghijklmnopqrstuvwxyz";
      break;
    } else if (lowerValid  === "no"){
      userValid = false;
    break;
    } else{
      alert("Please enter 'yes' or 'no'.");
    }
    
    // end of 'do-while' loop
    } while (userValid = true );

  //Obtains users desire to add Numeric characters
  //'do-while' loop to validate user input
  do{
    //Obtains users desire for Numeric characters in password
    var numerals = prompt("Would you like to include NUMERIC characters in your password? " + 
                            "Enter 'yes' or 'no'");
    //Variable to hold userInput and convert answer to all lowercase to validate.
    var numValid = numerals.toLowerCase();

    if(numValid === "yes"){
      userValid = false;
      criteria += "1234567890";
      break;

    } else if (numValid  === "no"){
      userValid = false;
      break;

    } else{
      alert("Please enter 'yes' or 'no'.");
    }
    
    // end of 'do-while' loop
    } while (userValid = true );

  //Obtains users desire to add Special characters
  //'do-while' loop to validate user input
  do{
    //Obtains users desire for Special characters in password
    var specialChar = prompt("Would you like to include Special characters in your password? " + 
                            "Enter 'yes' or 'no'");
    //Variable to hold userInput and convert answer to all lowercase to validate.
    var specialValid = specialChar.toLowerCase();

    if(specialValid === "yes"){
      userValid = false;
      criteria += " !#$%&'()*+,-./:;<+>?@[\\]^_`{|}~";
      break;
    } else if (specialValid  === "no"){
      userValid = false;
      break;
    } else{
      alert("Please enter 'yes' or 'no'.");
    }
    
     // end of 'do-while' loop
    } while (userValid = true );

    //Variable to hold generated password
  var randomChar = "";

  //'For" Loop to generate password with the desired criteria
  for(var i = 0; i < userLength; i++){
    randomChar += criteria.charAt(Math.floor(Math.random() * criteria.length));
  }
  //Returns the generated password
  return randomChar;
}
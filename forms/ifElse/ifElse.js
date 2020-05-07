
let firstName = prompt("Please enter your first name")
let userState = prompt("Please enter your state in 2 letter form")
let temperature = Number(prompt("Please enter a temperature"))
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]
// The above variables are declared and are used in the code below and for the code on the switch form.

// These two lines of code help capitalize the necessary letters if they are entered as lowercase by the user.
let capitalLetter = userState.toUpperCase()
let capitalName = firstName.charAt(0).toUpperCase() + firstName.slice(1)


// These 'if else' statements are used to determine where the user is from and what the temperature is in order to determine the appropriate message.
if (capitalLetter == "NE" && temperature < 32) {
   NSB.MsgBox(`${capitalName}, ${messages[0]}`)
  } else if (capitalLetter == "NE" && temperature > 32 && temperature < 50) {
     NSB.MsgBox(`${capitalName}, ${messages[1]}`)
  } else if (capitalLetter == "FL" && temperature > 32 && temperature < 50) {
     NSB.MsgBox(`${capitalName}, ${messages[2]}`)
  } else if (capitalLetter == "FL" && temperature > 50 && temperature < 70) {
     NSB.MsgBox(`${capitalName}, ${messages[3]}`)
  }


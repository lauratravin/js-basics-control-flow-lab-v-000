// Write your code in this file!
function scuberGreetingForFeet(someValue){
 let message
  if (someValue > 2500) {
         message = 'No can do.';
  }
  else {
     if (someValue > 2000){
           message = 'I will gladly take your thirty bucks.';
          }
     else  {
            if (someValue<= 400) {
              message = 'This one is on me!';
            }
     }
  }
  return message;     
}

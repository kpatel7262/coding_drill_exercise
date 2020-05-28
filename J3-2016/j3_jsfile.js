function palindrome(){

/*getting value of input*/
var originalString = document.getElementById('pali_string').value; 

/*checking the string by splitting  reversing and join again*/
var newString = originalString.split('').reverse().join('');
  
  /*if the original and reverse the same then it is palindrome */
  if (originalString === newString){
   document.getElementById('ans').innerHTML = "Palindrome";
  }else {
    document.getElementById('ans').innerHTML = "Not Palindrome";
  }

  /*confused to get the palindrome characters*/

}


function result(){
/*set a variable for the input box*/
var m = document.getElementById('mood').value;

//because we have more than 3 posibility,I am using switch
switch(m){

	//if the input has :-) , it will display happy
	case ":-)":
		document.getElementById('ans').innerHTML = 'happy' ;
		break;

	//if the input has :-() , it will display sad
	case ":-(":
		document.getElementById('ans').innerHTML = 'sad' ;
		break;
	
	//if the input has :-) and :-( , it will display unsure
	case (":-)" || ":-("):
		document.getElementById('ans').innerHTML = 'unsure' ;
		break;

	//if there is no such emoticons, it will display non
	default:
		document.getElementById('ans').innerHTML = 'none';
		break;
}

/*the result is not exact they asked for in the question, as switch only compares the whole sring, I am still searching for the answer to use case in a proper way*/



/*started with this but later i realise that if else if and else only works if there are 3 posibilities*/

// /*condition if there is some value :-) in input*/
// 	if(m.includes(':-)')){
// 		document.getElementById("ans").innerHTML = "happy" ;
// 	}

// /*condition if there is some value :-()) in input*/
// 	else if(m.includes(':-(')){
// 		document.getElementById("ans").innerHTML = "sad";
// 	}


// /*condition if there is no value in input*/
// 	else{
// 		document.getElementById('ans').innerHTML = "none";
// 	}

}

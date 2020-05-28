function result(){
/*set variables for each treat*/
var s = document.getElementById('s_treat').value;
var m = document.getElementById('m_treat').value;
var l = document.getElementById('l_treat').value;	

/*variables to validate the treat values*/
var validate_s = document.getElementById('s_treat').value;
var validate_m = document.getElementById('m_treat').value;
var validate_l = document.getElementById('l_treat').value;

/*checked if the value of the treats are given as condition*/
	if (validate_s > 9 || validate_l > 9 || validate_m > 9 ){
		document.getElementById('error_s').innerHTML = "Please enter non-negative integer less than 10" ;
	}

/*set the formula to get mood status for barley*/
	var score = ((1*s) + (2*m) + (3*l));
	console.log(score);

	if (score < 10){
		document.getElementById('ans').innerHTML = "Barley is sad today... :(" ;
	}
		else {
			document.getElementById('ans').innerHTML = "Barley is happy today... :)" ;
		}
	
}

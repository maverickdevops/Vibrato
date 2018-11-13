function clicked(){
	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var coruser = "test";
	var corpass = "123";
	
	if (user.value == coruser) {
		
		if (pass.value == corpass){
			
			window.alert("You are now logged in to the system as " + user.value);
			window.open("http://www.vibrato.com.au/");
		}else{
			
			window.alert("Oh no! looks like you don't belong here." + user.value + "wrong username and wrong password");
		
		}
	
	}else{
		
		window.alert("Oh no! looks like you don't belong here." + user.value);
	}
}

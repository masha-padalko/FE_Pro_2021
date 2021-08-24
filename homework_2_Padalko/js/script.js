currentDate = new Date();

// User data //////////////////////////////////////////////////////////////////////

userName = prompt('Enter your name:').trim();
userLastName = prompt(`${userName} enter your last name:`).trim();
userEmail = prompt('Enter your email:')
					.replaceAll(' ', '')
					.toLowerCase();
yearOfBirth = +prompt('Enter your year of birth:').replaceAll(' ', '');
userAge = currentDate.getFullYear() - yearOfBirth;

//////////////////////////////////////////////////////////////////////////////////

//Email validation //////////////////////////////////////////////////////////////

if(userEmail.indexOf(`@`) == -1){ 
	userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
}

if(!userEmail.indexOf(`@`)){ 
	userEmail = (`not valid email <b>${userEmail}</b> (symbol @ find in first place)`);
}

if(userEmail.indexOf(`@`) === userEmail.length-1){ 
	userEmail = (`not valid email <b>${userEmail}</b> (symbol @ find in last place)`);
}

////////////////////////////////////////////////////////////////////////////////////

// Output user information on the page ////////////////////////////////////////////

document.write(`<ul>
	<li>Name: <b>${userName}</b> <b>${userLastName}</b></li>
	<li>Email: <b>${userEmail}</b></li>
	<li>Age: <b>${userAge}</b></li>
</ul>`);

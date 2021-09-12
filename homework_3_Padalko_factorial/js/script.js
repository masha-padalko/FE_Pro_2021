// Enter a
do{
	a = parseInt(prompt(`Enter a`, 5));
	
} while(isNaN(a));

// Enter b
do{
	b = parseInt(prompt(`Enter b, which more then ${a}`, 10));
	
} while(isNaN(b) || a>b);

// Enter step h
do{
	h = parseInt(prompt(`Enter h`, 2));

} while(isNaN(h) || h<=0 || h==b-a)
console.log(`------------------------------`);
console.log(`Calculation Factorial for input numbers from ${a} to ${b} with step ${h}`);

// empty string for output list of factorials 
factList = '';

for(sum=0; a<=b; a+=h){ 

	factorial=1;

	for(i=1; i<=a; i++){
		factorial *= i;
	}

	sum += factorial;

	console.log(`${a}! = ${factorial}`);
	console.log(`-----`);
	factList+= String(a) + '! ';
}

console.log(`Sum of factorials ${factList} = ${sum}`);



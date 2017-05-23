$(document).ready(function() 
{
	var targetNumber=[33,23,67];
	var number0=[10,20,2,1];
	var number1=[5,5,3,7];
	var number2=[20,30,7,10];
	var rtnumber=targetNumber[Math.floor(Math.random()*targetNumber.length)];
	console.log(rtnumber);
	console.log(rtnumber);
	var index=targetNumber.indexOf(rtnumber);
	console.log(index);
    console.log( "ready!" );

	for(i=0;i<3;i++)
	{
		if(index==i)
		{ 
			console.log(index);			
			document.getElementById("#sysScore").innerHTML += index;

		}
	}
});
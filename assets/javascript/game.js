$(document).ready(function() 
{
	var targetNumber=[33,23,67,53];
	var number0=[10,20,2,1];
	var number1=[5,5,3,7];
	var number2=[20,30,7,10];
	var number3=[20,10,5,3];
	var rtnumber=targetNumber[Math.floor(Math.random()*targetNumber.length)];
	console.log(rtnumber);
	var index=targetNumber.indexOf(rtnumber);
	console.log(index);
		if(index===0)
		{ 
			console.log(index);			
			$("#sysScore").append(index);
			for(i=0;i<4;i++)
			{
				$("stone").attr("data-crystalvalue", number0[i]);
			}

		}
		if(index===1)
		{ 
			console.log(index);			
			$("#sysScore").append(index);
			for(i=0;i<4;i++)
			{
				$("stone").attr("data-crystalvalue", number1[i]);
			}

		}
		if(index===2)
		{ 
			console.log(index);			
			$("#sysScore").append(index);
			for(i=0;i<4;i++)
			{
				$("stone").attr("data-crystalvalue", number2[i]);
			}

		}
		if(index===3)
		{ 
			console.log(index);			
			$("#sysScore").append(index);
			for(i=0;i<4;i++)
			{
				$("stone").attr("data-crystalvalue", number3[i]);
			}

		}
	
});
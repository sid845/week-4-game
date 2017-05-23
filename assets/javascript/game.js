$(document).ready(function() 
{
	var counter=0;
	var targetNumber=[33,23,67,53];
	var number0=[10,20,2,1];
	var number1=[5,5,3,7];
	var number2=[20,30,7,10];
	var number3=[20,10,5,3];
	var rtnumber=targetNumber[Math.floor(Math.random()*targetNumber.length)];
	var index=targetNumber.indexOf(rtnumber);
	//depending on the random number crystal values are assigned
		if(index===0)
		{ 		
			$("#sysScore").append(" "+rtnumber);
			$("stone1").attr("crystalvalue", number0[0]);
			$("stone2").attr("crystalvalue", number0[1]);
			$("stone3").attr("crystalvalue", number0[2]);
			$("stone4").attr("crystalvalue", number0[3]);

		}
		if(index===1)
		{ 		
			$("#sysScore").append(" "+rtnumber);
			$("stone1").attr("crystalvalue", number1[0]);
			$("stone2").attr("crystalvalue", number1[1]);
			$("stone3").attr("crystalvalue", number1[2]);
			$("stone4").attr("crystalvalue", number1[3]);
		}
		if(index===2)
		{ 		
			$("#sysScore").append(" "+rtnumber);
			$("stone1").attr("crystalvalue", number2[0]);
			$("stone2").attr("crystalvalue", number2[1]);
			$("stone3").attr("crystalvalue", number2[2]);
			$("stone4").attr("crystalvalue", number2[3]);

		}
		if(index===3)
		{ 		
			$("#sysScore").append(" "+rtnumber);
			$("stone1").attr("crystalvalue", number3[0]);
			$("stone2").attr("crystalvalue", number3[1]);
			$("stone3").attr("crystalvalue", number3[2]);
			$("stone4").attr("crystalvalue", number3[3]);
		}
		//
		$("#stone").on("click",function()
		{
			var crystalValue = ($(this).attr("crystalvalue"));
		    crystalValue = parseInt(crystalValue);
		    counter +=crystalValue;
		    $("#myscore").append(counter);
		    if(counter===rtnumber)
		    	alert("you win");
		    else if(counter>rtnumber)
		    	alert("you lose");
		});
	
});

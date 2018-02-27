var n = document.getElementById("next");
var x1 = 1;
var x2 = 1;
var x3 = 1;
var x4 = 1;

var choice1= document.getElementById("head");
var choice2= document.getElementById("body");
var choice3= document.getElementById("legs");
var choice4= document.getElementById("foot");
var h1 = document.getElementById("h1");
var b1 = document.getElementById("b1");
var l1 = document.getElementById("l1");
var f1 = document.getElementById("f1");
var bgText = document.getElementById("bgText");
n.addEventListener("click",function()
{
	if(choice1.checked){
		h1.src = "imgs/gears/h" + x1 + ".png";
		x1++;
			if(x1 > 3){
			x1 = 1;
			}
		}else if(choice2.checked){
		b1.src = "imgs/gears/b" + x2 + ".png";
		x2++;
			if(x2 > 3){
			x2 = 1;
			}		
		}else if(choice3.checked){
		l1.src = "imgs/gears/l" + x3 + ".png";
		x3++;
			if(x3 > 3){
			x3 = 1;
			}
		}else if(choice4.checked){
		f1.src ="imgs/gears/f" + x4 + ".png";
		x4++;
			if(x4 > 3){
			x4 = 1;
			}	
		}else{
			alert("Please choose one!");
		}
	
});
bgText.addEventListener("keyup", function(ev){
	if(ev.keyCode ==13){
		
		if(bgText.value == "combo1"){
			h1.src = "imgs/gears/h1.png";
			b1.src = "imgs/gears/b1.png";
			l1.src = "imgs/gears/l1.png";
			f1.src = "imgs/gears/f1.png";
			}
		}else if(bgText.value =="combo2")
		{
			h1.src = "imgs/gears/h2.png";
			b1.src = "imgs/gears/b2.png";
			l1.src = "imgs/gears/l2.png";
			f1.src = "imgs/gears/f2.png";
		}else if(bgText.value =="combo3")
		{
			h1.src = "imgs/gears/h3.png";
			b1.src = "imgs/gears/b3.png";
			l1.src = "imgs/gears/l3.png";
			f1.src = "imgs/gears/f3.png";
		}else if(bgText.value == "random")
		{
			var y = Math.floor((Math.random() * 3)+1);
			h1.src = "imgs/gears/h" + y + ".png";
			b1.src = "imgs/gears/b" + y + ".png";
			l1.src = "imgs/gears/l" + y + ".png";
			f1.src = "imgs/gears/f" + y + ".png";
		}else{
			alert("Please choose your style")
			}
	})

var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");	
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");
var main = document.getElementById("main");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");

bg1.addEventListener("click",function(){
	m1.style.display ="inline-block";
	main.style.display=" block ";
	});
bg2.addEventListener("click",function(){
	m2.style.display="inline-block";
	main.style.display="block ";
	});
bg3.addEventListener("click",function(){
	m3.style.display="inline-block";
	main.style.display="block ";
	});
bg4.addEventListener("click",function(){
	m4.style.display="inline-block";
	main.style.display="block ";
	});
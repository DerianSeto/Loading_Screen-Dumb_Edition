
function Start(){
	setTimeout(() => {Go1 = setInterval(UpDown1, 800); UpDown1();}, 0);
	setTimeout(() => {Go2 = setInterval(UpDown2, 800); UpDown2();}, 200);
	setTimeout(() => {Go3 = setInterval(UpDown3, 800); UpDown3();}, 400);
}

function UpDown1(){
	cont1 = document.getElementById("cont1");
	cont1.style.animationPlayState = "running";
	
	cont1.style.animationName = "none";
	cont1.offsetWidth;
	cont1.style.animationName = "Bounce";
}

function UpDown2(){
	cont2 = document.getElementById("cont2");
	cont2.style.animationPlayState = "running";
	
	cont2.style.animationName = "none";
	cont2.offsetWidth;
	cont2.style.animationName = "Bounce";
}

function UpDown3(){
	cont3 = document.getElementById("cont3");
	cont3.style.animationPlayState = "running";
	
	cont3.style.animationName = "none";
	cont3.offsetWidth;
	cont3.style.animationName = "Bounce";
}
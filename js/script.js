var img = [
	"img/audi.jpg",
	"img/bmw.jpg",
	"img/honda.jpg",
	"img/mers.jpg",
	"img/tesla.jpg",
	"img/va72107.jpg"
]
 var username = prompt("Enter your name: ");
 if (username == '')
 {
	username = prompt("You don't entered name");
 }



 var pic1 = document.getElementById('drawing1');
 var pic2 = document.getElementById('drawing2');
 var pic3 = document.getElementById('drawing3');
 var pic4 = document.getElementById('drawing4');
 var pic5 = document.getElementById('drawing5');
 var pic6 = document.getElementById('drawing6');
 var pic7 = document.getElementById('drawing7');
 var pic8 = document.getElementById('drawing8');
 var pic9 = document.getElementById('drawing9');
 var result = document.getElementById('result');

 var aim = 0;

 const button = document.querySelector('.button');

 button.addEventListener('click', () => {
	pic1.src=img[Math.floor(Math.random()*img.length)];
	pic2.src=img[Math.floor(Math.random()*img.length)];
	pic3.src=img[Math.floor(Math.random()*img.length)];
	pic4.src=img[Math.floor(Math.random()*img.length)];
	pic5.src=img[Math.floor(Math.random()*img.length)];
	pic6.src=img[Math.floor(Math.random()*img.length)];
	pic7.src=img[Math.floor(Math.random()*img.length)];
	pic8.src=img[Math.floor(Math.random()*img.length)];
	pic9.src=img[Math.floor(Math.random()*img.length)];


 aim++;
 document.getElementById('aim').innerHTML = "Attempt " + aim + " from 3";
 document.getElementById('button').innerHTML = "Take a risk)";

 if(aim === 3){
	if ((pic1.src == pic2.src && pic2.src == pic3.src) || (pic4.src == pic5.src && pic5.src == pic6.src) || (pic7.src == pic8.src && pic8.src == pic9.src))
 {
	document.getElementById('result').innerHTML = "Player " + username + " won!";
	result.style = "color: rgb(55, 164, 40); text-shadow: 3px 1px 2px rgba(181, 218, 149, 1);";
 }
 else {
	document.getElementById('result').innerHTML = "Player " + username + " Go home";
	result.style = "color: rgb(242, 77, 40); text-shadow: 3px 1px 2px rgba(255, 92, 133, 1);";
 }
}

if(aim >= 4){
	aim = 0;
	document.getElementById('aim').innerHTML = "Endeavor" + aim + " from 3"

	pic1.src = "img/slit.jpg";
	pic2.src = "img/slit.jpg";
	pic3.src = "img/slit.jpg";
	pic4.src = "img/slit.jpg";
	pic5.src = "img/slit.jpg";
	pic6.src = "img/slit.jpg";
	pic7.src = "img/slit.jpg";
	pic8.src = "img/slit.jpg";
	pic9.src = "img/slit.jpg";

	document.getElementById('button').innerHTML = "One more?"
	document.getElementById('result').innerHTML = " ";
}
 });

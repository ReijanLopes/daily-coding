const myInput = document.querySelector('input'),
	mySpan = document.querySelector('span');

let counter = 0,
	timer = null; // variável para armazenar nosso timer

myInput.addEventListener('input', function(){
	// limpamos o timer, para não causar repetições desnecessárias 
  	clearTimeout(timer);
	// armazenamos o timer novamente
  	timer = setTimeout(function(){
  		mySpan.innerText = ++counter;
  	}, 500);
})

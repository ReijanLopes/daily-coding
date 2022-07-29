//É utilizado quando uma função só pode ser ativada uma vez
const once = (fn, context) => {
	let result 

	return function(){
	if(fn){
        result = fn.apply(context || this, arguments);
        fn = null;
    }
return result;
}
}

// dessa forma ela vira reutilizavel
const ativeSomenteUmaVez = once(function(){
console.log('Fired!')
})

setInterval(() => {
	ativeSomenteUmaVez();
}, 500); 
// determina qeu somente uma fucao sera ativada por vez, evitando a inicialazao duplicada


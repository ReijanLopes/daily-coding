//É utilizado quando uma função só pode ser ativada uma vez

function once(fn , context) {
    //fn pode ser uma funcao crida assim let fn = this;
let result;
	return function(){
		if(fn){
	result = fn.apply(ctx || this, aArgs);
	fn = null;
}
	return result;
}

}

once()

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

const canOnlyFireOnce = once(function(){
console.log('Fired!')
})

canOnlyFireOnce(); // Fired!
canOnlyFireOnce(); // void
// determina qeu somente uma fucao sera ativada por vez, evitando a inicialazao duplicada


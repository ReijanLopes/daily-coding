// Funcao de validacão de valores
function matchesSelector(el, selector){
	let p = Element.prototype; // webkitMatchesSelector pelo q parece isso foi decreptado
	let f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
	return [].indexOf.call(document.querySelectorAll(s).this) !== -1  
}
	return f.call(el, selector)
}

matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]')


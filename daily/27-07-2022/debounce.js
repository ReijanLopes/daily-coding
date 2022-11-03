
let timer = null;
const debounce1 = (url) => {
	let get
	
	clearTimeout(timer);
	timer = setTimeout(async () => {
		console.log(url)
		get =  await fetch(url)
	 	let	data = get.json()
		return data
	}, 2000)
}
// uma funcao que espera um tempo ate ser ativada novamente
debounce1("https://react-component-depot.netlify.app/leaflet/draw-on-map")
// obvio que o fetch nao faz uma chamda verdadeira, o que foi testado foi a funcionalidade de espera da funcao
// window.screen.addEventListener("change", ()=>{
//     console.log("foi")
// })
// largura.addEventListener("change", ()=> {
//     console.log(largura)
// })
// so funciona se for input 

const test = () => {
    const largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    const altura = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
console.log(altura);
console.log(largura);
}

// setInterval(()=>{test() })
// ineficiente, por ser chamado muitas vezes, mas com o javascrip puro e a melhor maneira

window.addEventListener('resize', function(event){
    test()
});
// muito eficiente e facil

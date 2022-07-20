// Document Object Model (DOM)
// HTML document e uma estrutura de dados, essa manipulacao e possivel pelo get, create, append or remove. Quando seletamos um elementos HTML com javascript e parecido com o CSS, usando tag name, id, class name ou atributos.

const getHTML = document.getElementsByTagName()// parametro: string, retorna um object ou um HTMLCollection(E um Array de Object de elementos). Pega usando tag name, class name ou atributos
document.getElementsByClassName() // parametro: string, retorna um object ou um HTMLCollection(E um Array de Object de elementos). Pega usando tag name, class name ou atributos
document.getElementsById() // parametro: string, retorna um unico elemento. pegando somente um elemento por Id.
document.querySelector()// paremetro: string, retorna o primeiro elemento. codigos especificos para "tag" ,"#id", ".className"
document.querySelectorAll()// o querySelectorAll uma uma versao do querySelector so que a sua resposta e um HTMLCollection.

// adicionando atributos sempre será com .(dot) e o atributo;
getHTML.setAttribute("class", "title") // aceita dois parametros em string
getHTML.setAttribute("id", "fourth-title")

getHTML.className = "title"
getHTML.id = "id"

//add e remover className
getHTML.classList.add('title', 'header-title')
getHTML.classList.remove('title', 'header-title')

// create element
document.createElement('h1') // aceitando uma tagName, e cria um elemento 
// criando e setando
let title
    for (let i = 0; i < 3; i++) {
        title = document.createElement('h1')
        title.className = 'title'
        document.fatherElementHTML.appendChild(title)
    }

// exemple remove
const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
    for (const list of lists) {
        ul.removeChild(list)
}

// get functions events
// <button onclick="(event.target) => clickMe()">Click Me</button>
const clickMe = (target) => {
    console.log(target) // return console element html
  }

// tipos de ouvintes de eventos
/*
click - acionado quando se clica num elemento
dblclick - acionado quando da dois clicks num elemento
mouseenter - acionado quando o mouse entra na area de um elemento
mouseleave - acionado quando o mouse sai da area de um elemento
mousemove - acionado quando o mouse se move sobre um elemento
mouseover - acionado quando o mouse se move sobre um elemento
mouseout - acionado quando o mouse sai do elemento
input - acionado quando o mouse entra na elemento tag input
change -acionado quando o valor da tag imput muda
blur - acionado quando o elemento nao esta em focado
keydown - acionado quando a chave esta pra baixo
keyup - acionado quando a chave para cima (depois solta um solta uma tecla)
keypress - acionado quando a chave foi precionada
onload - acionado quando o a janela termina de carregar 
*/
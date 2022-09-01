const root = document.querySelector(".root");
const cnv =  document.querySelector("canvas")
const ctx = cnv.getContext("2d")// Retorna o contexto de desenho no canvas, what is it
// Leva a criacao de objetos, aqui estamos criando Elementos bidimensional

// dar tamanho ao canvas, desnecessario, mas eu gosto kk
const resize = (e) => {
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    
    cnv.width = width
    cnv.height = height
}
window.addEventListener("resize", resize)

let catX = catY = hyp = 0

const gravity = 0.1;

// valor padrão da bola, 
let ball = {
    radius: 20,
    vx: Math.floor(Math.random()*10)+1,
    vy: 0,
    x: 50,
    y: 50,
    color: "#00f",
    help: false,
}

cnv.addEventListener("mousedown", function(e){
    // catX = ball.x - e.offsetX;
    // catY = ball.y = e.offsetY;
    hyp = Math.sqrt(catX*catX + catY*catY);
    if(catX < ball.radius && catX > -20 && catY < ball.radius && catY > -20){
        ball.help =  true;
    }

}, false)
cnv.addEventListener("mouseup", function(){
    if(ball.help){
        ball.help = false;
        ball.vx = Math.floor(Math.random()*10)+1
    }
}, false)
cnv.addEventListener("mousemove", function(e){
    if(ball.help){
        ball.x = e.offsetX;
        ball.y = e.offsetY;
        
    }
}, false)

const loop = () => {
    // console.log(ball.x)
    // console.log(ball.y)
    window.requestAnimationFrame(loop, cnv)
    update();
    render()
}
const update = () => {
    // trava para parar o movimento da bola
    if(!ball.help){
        ball.vy += gravity;
        ball.y += ball.vy;
        ball.x += ball.vx;
    }else{
        ball.vy = 0;
        ball.vx = 0;
    }

    // queda e perda de força de quique
    if(ball.y + ball.radius > cnv.height){
        ball.y = cnv.height - ball.radius;
        ball.vy *= -0.8;
    }
    // bater na parede diminuir a velocidade de movimento com o tempo
    if(ball.x - ball.radius < 0 || ball.x + ball.radius > cnv.width){
        ball.x = ball.x - ball.radius < 0 ? ball.radius : cnv.width - ball.radius;
        ball.vx *= -0.8
    }
}
const render = () => {
    ctx.clearRect(0,0, cnv.width, cnv.height)
    ctx.fillStyle = ball.color
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2)
    ctx.closePath()
    ctx.fill()
}

loop()
resize()
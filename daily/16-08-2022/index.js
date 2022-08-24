const root = document.querySelector(".root")

let x = 0
let y = 0
let sizeSnake = 0
let direction = "ArrowRight"
const seedsCoor = []
const arrayWhereHaveBeen = []

document.addEventListener("keydown", (e) => {
    if(e.key == "ArrowRight" && direction != "ArrowLeft"){
        direction = e.key
    }
    if(e.key == "ArrowLeft" && direction != "ArrowRight"){
        direction = e.key
    }
    if(e.key == "ArrowDown" && direction != "ArrowUp"){
        direction = e.key
    }
    if(e.key == "ArrowUp" && direction != "ArrowDown"){
        direction = e.key
    }
    
})

const createPlayer = () => {
    const player = document.createElement("div")
    player.className = "player"
    player.style.position = "absolute"
    player.style.backgroundColor= "red";
    player.style.width= "50px";
    player.style.height= "50px";
    root.appendChild(player)
}

const movePlayer = () => {
    const player = document.querySelector(".player")

        if(x < 0 || y < 0 || x > (limit()?.[0] - 60 ) || y > (limit()?.[1] - 60 ) ){
            console.log("voce perdeu")
        }else if(direction === "ArrowRight"){
            player.style.left = `${x += 30}px`
        }else if(direction === "ArrowLeft"){
            player.style.left = `${x -= 30}px`
        }else if(direction === "ArrowDown"){
            player.style.top = `${y += 30}px`
        }else if(direction === "ArrowUp"){
            player.style.top = `${y -= 30}px`
        }
    
        arrayWhereHaveBeen.unshift([x, y])
        if(arrayWhereHaveBeen.length > sizeSnake){
            arrayWhereHaveBeen.splice(sizeSnake, 3)
        }
        collision()
        deleteBody()
        bodySnake()     
}

const limit = () => {
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    return [width, height]
}

const seedsRandom = () => {
    const width = Math.round(Math.random() * (limit()?.[0] - 50))
    const height = Math.round(Math.random() * (limit()?.[1] - 50))
    
    const filter = seedsCoor.filter((item) => {
        (item?.[0] + 50 ) <  width && item?.[0] - 50 > width && (item?.[1] + 50 ) <  height && (item?.[1] - 50 ) > height
    })
    if(!filter[0]){ 
        const seed = document.createElement("div")
        seed.classList = "seed"
        seed.style.left = `${width}px`
        seed.style.top = `${height}px`
        root.appendChild(seed)
        seedsCoor.push([width, height, seed])
    }   
}

const collision = () => {
    const filter = seedsCoor.map((item, index) => {
        if(item[0] - 30 < x && item[0] + 30 > x && item[1] - 20 < y && item[1] + 20 > y){
            item[2].remove()
            seedsCoor.splice(index, 1)
            sizeSnake++
        }    
    })    
}

const bodySnake = () => {
    arrayWhereHaveBeen.map((item) => {
        const body = document.createElement("div")
        body.classList = "bodySnake"
        body.style.left = `${item[0]}px`
        body.style.top = `${item[1]}px`
        root.appendChild(body)
    })
    bodyCollision()
}

const bodyCollision = () => {
    const res = arrayWhereHaveBeen.slice(2, arrayWhereHaveBeen.length)
    console.log(res)
    res.map((item) => {
        if(item[0] - 30 < x && item[0] + 30 > x && item[1] - 20 < y && item[1] + 20 > y){
            alert("bateu no seu corpo")
        }    
    })    
}

const deleteBody = () => {
    const bodySnake = document.querySelectorAll(".bodySnake")
    bodySnake.forEach((item) => {
        item.remove()
    })
}

createPlayer()

setInterval(() => {
    movePlayer()
}, 100)

setInterval(() => {
    seedsRandom()
}, 5000)

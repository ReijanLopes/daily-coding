const ele = document.querySelector(".box");


let counttop = 0
let countleft = 0
const box = document.addEventListener('keydown', (event) => {
    const ele = document.querySelector(".box");
    const coordes = ele.getBoundingClientRect()

    if(event.key === "ArrowLeft"){
        countleft--
        ele.style = `left: ${coordes.x--}`
        console.log(`left: ${countleft}`)
    }
    if(event.key === "ArrowDown"){
        counttop++
        ele.style = `top: ${coordes.y++}`
        console.log(`down: ${counttop}`)
    }
    if(event.key === "ArrowRight"){
        countleft++
        ele.style = `left: ${coordes.x++}`
        console.log(`right: ${countleft}`)
    }
    if(event.key === "ArrowUp"){
        counttop--
        ele.style = `top: ${coordes.x--}`
        console.log(`top: ${countleft}`)
    }
})
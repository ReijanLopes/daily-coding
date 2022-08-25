const rood = document.querySelector(".rood");
const body = document.querySelector("body");

const moveElement = (e) => {
    rood.style.top = `${e.clientY - 25}px`
    rood.style.left = `${e.clientX - 25}px`
    console.log(e.clientX)
}

const clickDown = (e) => {
    body.addEventListener("mousemove", moveElement)
    console.log(body)
}

const clickUp = (e) => {
    body.removeEventListener("mousemove", moveElement)
}


rood.addEventListener("mousedown", clickDown)
rood.addEventListener("mouseup", clickUp)
body.addEventListener("mouseup", clickUp)


const root = document.querySelector(".root")
let eleTarget = undefined; 

const moveElement = (e) => {
    eleTarget.style.position = "absolute"
    eleTarget.style.top = `${e.clientY - 25}px`
    eleTarget.style.left = `${e.clientX - 25}px`
}

const insertNewPlace = () => {
    console.log("foi")
}

const move = (e) => {
    e.target.classList.remove("adapt")
    eleTarget = e.target
    const cards = document.querySelectorAll("card,boxShadow,adapt")
    console.log(cards)
    cards.forEach((card) => {
        console.log(card)
        card.addEventListener("mouseenter", insertNewPlace)
    })
    
    root.addEventListener("mousemove", moveElement)

}

const removeMove = (e) => {
    e.target.classList.add("adapt")
    const cards = document.querySelectorAll("adapt")
    cards.forEach((card) => {
        card.removeEventListener("mouseenter", insertNewPlace)
    })
    eleTarget = undefined
    root.removeEventListener("mousemove", moveElement)

}

const data = [
    {name: "YouTube"},{name: "Gmail"},{name: "React"},{name:"Doity"}
]

data.map((item) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList = "card";
    root.appendChild(cardContainer)
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("boxShadow")
    card.classList.add("adapt");
    card.innerHTML = item.name;
    
    card.addEventListener("mousedown", move)
    card.addEventListener("mouseup", removeMove)
    cardContainer.appendChild(card)
})



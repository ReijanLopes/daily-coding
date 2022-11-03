const root = document.querySelector(".root")
const arrayResearchedTopics = []

let timer = null;
const Researched = (e) => {
    const inputSearch = document.querySelector(".search")
    const value = inputSearch.value
    

        if(arrayResearchedTopics.length >= 9){
            arrayResearchedTopics.splice(8, 2)
            console.log("passoi")
        }
		arrayResearchedTopics.unshift(value)

        inputSearch.value = ""

        const list = document.querySelectorAll(".namesResearch")
            list.forEach((item) => {
            item.remove()
        })
     
}


const buttonSearch = document.querySelector(".buttonSearch")
buttonSearch.addEventListener("click", Researched)

const listResearch = (e) => {
    const list = document.querySelectorAll(".namesResearch")
    
    list.forEach((item) => {
        item.remove()
    })
    arrayResearchedTopics.map((item) => {
        const namesResearch = document.createElement("div")
        namesResearch.classList = "namesResearch"
        namesResearch.innerHTML = item
        root.appendChild(namesResearch)
        console.log(item)
    })
}

const inputSearch = document.querySelector(".search")
inputSearch.addEventListener("click", listResearch)
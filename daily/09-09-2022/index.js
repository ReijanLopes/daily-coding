const root = document.querySelector(".root");

const createStars = () => {
    const Ul = document.createElement("ul");
    Ul.classList = "evaluation"
    root.appendChild(Ul)

    for (let i = 1; i < 6; i++) {
       const Li = document.createElement("li")
       Li.classList = "star-icon"
       Li.setAttribute("data-evaluation", i);

       Li.addEventListener("click", (e) => {
        const stars = document.querySelectorAll(".star-icon")
        const classStar = e.target.classList
        
        if(!classStar.contains("active")){
            stars.forEach(star => {
                star.classList.remove("active")
            })
            classStar.add("active")
        }
        
        console.log(e.target.getAttribute("data-evaluation"))
       })
       
       Ul.appendChild(Li)
    }
}

createStars()
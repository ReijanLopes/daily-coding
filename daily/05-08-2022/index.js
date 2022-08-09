let dataDB = [{name: "nameDB"}, {birday: "birdayDB"}, {number: "numberDB"}]

const button = document.querySelector(".button")
button.addEventListener("click", () => {
    window.location = "http://127.0.0.1:5500/05-08-2022/home.html"
})

const checkInputsChange = () => {
    const inputStudents = document.querySelectorAll(".studentDB")
    inputStudents.map((input) => {
    console.log(input.id);
    console.log(input.value);

})
}

let salveValueChanges = []
const valueChanges = (id ,value) => {
    console.log()
    salveValueChanges = [...salveValueChanges, salveValueChanges[`${id}`] = value]
}

window.addEventListener("beforeunload", (event) => {
    event.preventDefault()
    alertSave()
    alert("console")
    window.stop()
})

const alertSave = () => {
    alert("foi")
}


{/* <input id="name" placeholder="nameDB" type="text" class="studentDB">
        <input id="birday" placeholder="birdayDB" type="text" class="studentDB">
        <input id="number" placeholder="numberDB" type="text" class="studentDB"> */}
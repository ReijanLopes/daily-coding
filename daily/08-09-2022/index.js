const student = [{
    nameStudent: "Jose",
    class: {id: "1",location: "segunda sala a esquerda"},
    books: ["portugues", "ingles",  "matematica"]}

]

const {nameStudent, class: {id, location}, books} = student[0]
console.log(nameStudent, id, location, books)


const [port, ing, mat] = books
console.log(port, ing, mat)
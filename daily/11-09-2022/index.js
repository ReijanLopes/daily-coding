const classroom = ["1a", "1b", "1c", "1d"]
const Student = [{name:"Reijan"}, {name:"Lucas"}, {name:"Ruan"}, {name:"Marcos"}, {name:"Jose"}, {name:"Andrei"}, {name:"Marta"}]
const separate = []

let room =  0
function allocatingClassrooms(){

    const quantityPerRoom = Math.floor(Student.length / classroom.length)
    
    console.log(Student.splice(0, quantityPerRoom * classroom.length))
    const student = Student.splice(0, quantityPerRoom * classroom.length)
    for (let i = 0; i < classroom.length; i++) {
        
        separate.push({classroom: classroom[i], student: student.splice(room+=quantityPerRoom -1, 1)})
        console.log(separate)
    }
    room = 0
}


allocatingClassrooms()
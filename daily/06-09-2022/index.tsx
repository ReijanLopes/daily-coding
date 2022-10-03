const data = [ {students:[{
    name: "Reijan",
    classroom: 2,
    callroll: 5,
    schoolSupplies: [
        "lapis",
        "carderno"
    ],
    books: [
        "ciencias",
        "biologia",
        "matematica",
    ]
}, {
    name: "Lucas",
    classroom: 2,
    callroll: 5,
    schoolSupplies: [
        "bolsa",
        "carderno"
    ],
    books: [
        "ciencias",
        "biologia",
        "portugues"
    ]
}, {
    name: "Brenda",
    classroom: 2,
    callroll: 5,
    schoolSupplies: [
        "lapis",
        "bolsa",
    ],
    books: [,
        "biologia",
        "matematica",
        "portugues"
    ]
}, {
    name: "Samuel",
    classroom: 2,
    callroll: 5,
    schoolSupplies: [
        "lapis",
        "bolsa",
        "carderno"
    ],
    books: [
        "ciencias",
        "biologia",
        "matematica",
        "portugues"
    ]
}], 
checkMaterials: ["lapis", "bolsa", "carderno"],
}]

const {students, checkMaterials} = data[0]


const checkingSchoolSupplies = () => {
    const s = students.map(student => {
       const x = student.schoolSupplies.map(supplies => {
            if(supplies == checkMaterials?.[0] || supplies == checkMaterials?.[1] || supplies == checkMaterials?.[2]){
                return supplies 
            }
        })
        if(x.length === checkMaterials.length){
            return student
        }
    })
    return s
}

checkingSchoolSupplies().map((student) => {
   
    console.log(student?.name, student?.classroom, student?.callroll)
})
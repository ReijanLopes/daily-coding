const Studantes = 
[{name: "Reijan", phoneN: 999999999},
{name: "Reijan", phoneN: 999999999},
{name: "Reijan", phoneN: 999999999},
{name: "Reijan", phoneN: 999999999},
{name: "Reijan", phoneN: 999999999},
{name: "Reijan", phoneN: 999999999},
{name: "Reijan", phoneN: 999999999},
{name: "Reijan", phoneN: 999999999},
{name: "Reijan", phoneN: 999999999}]

class Person{

    constructor(name, phoneN){
        this.name = name
    }

    presentes(){
        console.log(this.name)
    }
}

let studante = Studantes.map((alun) => {
    let result = new Person(alun.name)
    return result
})

console.log(studante)
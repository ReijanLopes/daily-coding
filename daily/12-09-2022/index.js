const data = {company: "Agro Atlas", student: "João", person: "dogras", student: "felipe"}

const separate = () => {
    const com = []
    const stu = []
    const per = []
    console.log(data)
    data.map((item) => {
        item.company ? com.push(company) : ""
        item.student ? stu.push(student) : ""
        item.person ? per.push(person) : ""
    })
    console.log(com, stu, per)
}

// coisas que acho sem logica, mas resolvi tentar.
// primeiro de tudo nao tem como um array, ter duas keyName. Exemplo: person: "jose", person: "frederico"
// tipo de separação irracional
separate()
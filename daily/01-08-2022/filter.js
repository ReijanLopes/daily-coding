const data = [
    { name: "reijan", birday: 2345242, number: 97839283828 },
    { name: "rei", birday: 2345242, number: 97839283828 },
    { name: "jose", birday: 2345242, number: 97839283828 },
    { name: "marta", birday: 2345242, number: 97839283828 },
    { name: "lucas", birday: 2345242, number: 97839283828 },
    { name: "felipe", birday: 2345242, number: 97839283828 },
    { name: "ruan", birday: 2345242, number: 97839283828 },
    { name: "geferson", birday: 2345242, number: 97839283828 },
    { name: "brenda", birday: 2345242, number: 97839283828 },
    { name: "marta", birday: 2345242, number: 97839283828 },
    { name: "vvian", birday: 2345242, number: 97839283828 },
    { name: "janice", birday: 2345242, number: 97839283828 },
];

const filtrando = (keyObj, value) => {
    const valueUpperCase = value.toUpperCase()
    console.log("foi")
    return filter = data.filter((item) => item[keyObj].toUpperCase().includes(valueUpperCase))
}

const createObj = () => {
    const get = filtrando()
}

const deletObj = (keyObj, value, whatDelet) => {
    const get = filtrando(keyObj, value)

    if(whatDelet[0] == "get"){
        const index = data.indexOf(...get)
        get.slice(index, 1)
    }
    
}

deletObj["name", "reijan", ["prop", "number"]]


const get = filtrando("name", "reijan")

console.log(data)

 

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
    return filter = data.filter((item) => item[keyObj].toUpperCase().includes(valueUpperCase))
}

const createObj = () => {
    const get = filtrando()
}

const deletObj = (keyObj, value, whatDelet) => {
    const get = filtrando(keyObj, value)

    if(whatDelet === "all"){
        return data = []
    }
    if(whatDelet === "oneObj"){
       const index = data.findIndex((item) => item[keyObj] == value)
       data.slice(index, 1)
       return data
    }
   
    
}

deletObj("name", "reijan", "oneObj")

const get = filtrando("name", "rei")
console.log(data.indexOf("rei"))


 

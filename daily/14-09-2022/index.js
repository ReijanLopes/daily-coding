const data = {id: 22342342112312312312312, person: {
    name: "Jose",
    tools: {
        construction:["chainsaw", "screwdriver"],
        mostDangerous: {},
    }
}}

function getInfo(){
    //const {id, person: {name, tools: {construction, mostDangerous}}} = data
    //console.log(id, name, construction, mostDangerous)

    const {id, person} = data
    console.log(person?.tools?.mostDangerous)
}

getInfo()
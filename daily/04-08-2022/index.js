const data = [{name: "one"},{name:"two"},{name:"tree"}]
const [one, two, tree] = data


const add = [...data, one]
console.log("one",add)
console.log("two",data)


const forE = data.forEach((ele) => {
    return ele
})
console.log("forE",forE)

const MapTEST = data.map((ele) =>{
    return ele
})
console.log("map",MapTEST)

let element
let array = []
console.log("forLoop",element)
for (let i = 0; i < data.length; i++) {
    element = array[i];
    return element
}
// lenbresse as funcoes map e forEach, elas funcionam com valores internos rodando todas informacoes dentro deles e retornando os valores
// mas o forLoop coloca no codigo a repeticao dos valores do que estao dentro dele 
// entao nem uma funcao funcionaria daqui pra frente, por causa do return vindo do forLoop




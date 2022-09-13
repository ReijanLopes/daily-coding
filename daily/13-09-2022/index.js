const data = [
    {name: "Reijan"},
    {name: "Reijan"},
    {name: "Reijan"},
    {name: "Reijan"},
]

// nós testes no console ele não funciona, pelo que parece e um bug natural, ou ele e construido somente no cliente
// testando suposições
const clone = structuredClone(data)


function test(){
    clone.push("Loro Jose")// sim ele é uma objeto independente 
    data.push("Ana Maria")// Ele e realmente um objeto sem nenhuma ligação com o clone
    // Adicionei um novo elemento e mesmo assim ele nao foi adicionado ao clone
    const [ one, two, three, four ] = clone
    console.log("one:",one)

    clone.map((item) => {
        console.log(item)
    })
}
test()
console.log("data:",data)
console.log("clone:",clone)
// 60% mais rapido
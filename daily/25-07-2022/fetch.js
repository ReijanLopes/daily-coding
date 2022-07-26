// nos ja estudamos as promisses anteriormente, agora vamos aprofundar isso
// existe 5 tipos de promisses 

//get 
let User = "ReijanLopes"
let Repo = "daily-coding"
// no get vc passa a informacao na url | res.query
async function get(){ 
try {
    let get = await fetch(`https://github.com/${User}/${Repo}/tree/main/daily/09-07-2022`)
    let date = get.json()
    let useDate = date
} catch (error) {
    console.log(error)
}
}

// post e uma maneira mais segura, passado de uma maneira escondica no corpo da requisicao | res.body
async function post(){

    myHeaders={
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
            //informacoes enviadas
        })
    }

    try {
        let get = await fetch(`https://github.com/ReijanLopes`, myHeader)
        let date = get.json()
        let useDate = date
    } catch (error) {
        console.log(error)
    }
}

//criar um novo elemento dentro de um elemento já criado, update, res.body
async function put(){
    myHeaders={
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
            //informacoes enviadas
        })
    }

    try {
        let get = await fetch(`https://github.com/ReijanLopes`, myHeader)
        let date = get.json()
        let useDate = date
    } catch (error) {
        console.log(error)
    }

}

//update de um elemento já criado
async function path(){
    myHeaders={
        method: 'path',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
            //informacoes enviadas
        })
    }

    try {
        let get = await fetch(`https://github.com/ReijanLopes`, myHeader)
        let date = get.json()
        let useDate = date
    } catch (error) {
        console.log(error)
    }

}

//delete, obvio pra deletar obj
async function delet(){
    

    try {
        let get = await fetch(`https://github.com/ReijanLopes/${Informacao}/${Informacao}`, {
            method: "delete"
            })
        let date = get.json()
        let useDate = date
    } catch (error) {
        console.log(error)
    }

}

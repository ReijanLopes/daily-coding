// promessa
// sao feitas pra lidar com função asyncronas
const doDomething = callback => {
    setTimeout(() => {
        const skills = ['html', 'css', 'js']
        callback('It did not go well')
        }, 2000)
}

const callback = (err, result) => { // tipo de promese antiga
    if(err){
        return console.log(err)
    }else return console.log(result)
}

doDomething(callback) // It did not go well

// O javascript evoluiu e trouxe o .then .catch

const dataFetchThenCatch = () => {
    fetch('https://restcountries.com/v2/all')
        .then(result => console.log(result))
            .catch(err => console.log(err))
}

dataFetchThenCatch()

const dataFetchAsync = async() => {
    try {
        const data = await fetch('https://restcountries.com/v2/all')
        const get = await data.json()
        console.log(get)
    } catch (err) {
        console.log(err)
    }
}

dataFetchAsync()




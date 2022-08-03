const active = () => {
    // funciona a **cada** minuto, repetindo varias vezes.
setInterval(() => {
    const date = new Date()

    if(date.getHours() === 5){
        getDate()
    }

}, 1000)
}

let count = 0 
const getDate = () => {
    
    if(count < 3){
        // ativo somente uma vez **depois** de x tempo
        setTimeout(() => {
            getDate()
            
        }, 50000)
    }
    count++

    if(count > 3){
        count = 0
    }

}
// pegando informacao todo dias, uma unica vez por dia
active()
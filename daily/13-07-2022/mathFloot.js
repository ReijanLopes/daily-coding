// dias de trabalho por mes = 22
// horas de trabalho por dia = 8

const valorPorDia = (valorPorHora) => {
    return valorPorHora * 8
}

const desconto = (valorPorHora, numeroDiasTrabalho, desconto) => {
    const mesesComDesconto = Math.floor(numeroDiasTrabalho / 22)
    const diasSemDescontoValor = numeroDiasTrabalho % 22
    
    const valorTotal = diasSemDescontoValor * valorPorDia(valorPorHora)
    const valorTotalDescontado = valorPorDia(valorPorHora) * 22 * mesesComDesconto * desconto
    console.log(valorTotalDescontado + valorTotal)
}

desconto(80, 120, 0.5)
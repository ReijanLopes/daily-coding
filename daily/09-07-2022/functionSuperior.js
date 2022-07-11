// e uma funcao q retorna uma funcao q retorna uma funcao ou parametro

const callback = (n) => {
    console.log(n)
}

callback(40)

const functionOne = n => {
    const functiontwo = m => {
      const functionThree = t => {
        return 2 * n + 3 * m + t
      }
      return functionThree
    }
    return functiontwo
}

functionOne(4)(6)(5)
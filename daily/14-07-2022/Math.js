// constants matematicas type: number
const euler = Math.E //= ((1+(1/1000000)) ** 1000000)  e uma base dos logaritmos naturais não e uma função 

const pi = Math.PI // valor de PI  3,14159/ não e uma função  
const calculetePI = (valor) =>{
    return Math.PI * valor
}

calculetePI(14) //87.96459430051421

const raiz2 =  Math.SQRT2 // raiz de 2 e igual == 1.414 não e uma função
const calculeteRaiz2 =(number) =>{
    return Math.SQRT2 * number
}

calculeteRaiz2(3) // 4,24264

const logaritimoNatural2 = Math.LN2 // representa o logaritimo natural de 2 == 0,69314
const calculeteLogaritimoN = (value) => {
    return Math.LN2 * value
}
calculeteLogaritimoN(3) // 2,07942

const logaritimoNatural10 = Math.LN10 // não e um uma função == 2.302

const logaritimoBase10 = Math.LOG10E // not a function == 0,434 

const logaritimoBase2 = Math.LOG2E // not a function == 1,442

//METHODS

// Math.abs() return valor inteiro, e uma função. Exemple:
function MathAbs(value){
       return Math.abs(-value) * 4 // numero q vem do database negativo, mas visualmente ele e positivo e muitiplicado
       // tambem serve pra return de null undefind como 0
} 

MathAbs(-1) // return 1
MathAbs(null) // return 0
MathAbs('') // return 0
MathAbs([]) // return 0
MathAbs([2]) // return 2
MathAbs([1,2]) // return NaN == não e um numero
MathAbs({}) // return NaN  
MathAbs()  // return NaN 

// Math.acos() return o cosseno se o valor for entre -1 e 1, return o cosseno ou inverso do cosseno
const MathAcos =(value) =>{
    return Math.acos(value) //
}
MathAcos(-2)// NaN
MathAcos(-1)// 3.141592653589793
MathAcos(-0) // 1.5707963267948966
MathAcos(-0.5)// 1.0471975511965979
MathAcos(1) // 0
MathAcos(2)// NaN

//Math.acosh() return o arco cosseno hiperbolico eu numero. Estruture da equalção :  x2 – y2 = 1, se o valor for menor que 1 vai retornar NaN
const MathAcosh = (value) => {
    return Math.acosh(value)
}
MathAcosh(1)// 0
MathAcosh(2)// 1.3169

//Math.asin() return um arco de seno, entre -1 e 1
const MathAsin = (value) =>{
    return Math.asin(value) 
}


MathAsin(-2);  // NaN
MathAsin(-1);  // -1.5707963267948966 (-pi/2)
MathAsin(0);   // 0
MathAsin(0.5); // 0.5235987755982989
MathAsin(1);   // 1.5707963267948966 (pi/2)
MathAsin(2);   // NaN


// Math.asinh()
// Math.atan()
// Math.atan2()
// Math.atanh()
// Math.cbrt()
// Math.ceil()
// Math.clz32()
// Math.cos()
// Math.cosh()
// Math.exp()
// Math.expm1()
// Math.floor()
// Math.fround()

// Math.hypot()
// Math.imul()

// Math.log()
// Math.log10()
// Math.log1p()
// Math.log2()
// Math.max()
// Math.min()
// Math.pow()
// Math.random()
// Math.round()
// Math.sign()
// Math.sin()
// Math.sinh()
// Math.sqrt()
// Math.tan()
// Math.tanh()
// Math.trunc()

// Math.log()




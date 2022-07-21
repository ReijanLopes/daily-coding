let x = 1234;
let y = 5678;

console.log(Math.abs(x)); // 1234
//Retorna o módulo, ou valor absoluto, de um número (|x|).obs: valor absoluto e ele mesmo. exemplo: 134, o valor absoluto de 1 do 134 e 1
console.log("1", Math.acos(x)); // NaN
//Retorna o arco-coseno de um número (arccosx). Se o parametro passado for entre 1 e -1, se não retorna nao e um numero
console.log("2", Math.acosh(x)); //  7.811163220849231
//Retorna o arco-coseno hiperbólico de um número.
console.log("3", Math.asin(x)); // NaN
//Retorna o arco-seno de um número (arcsinx). Se o parametro passado for entre 1 e -1, se não retorna nao e um numero
console.log("4", Math.asinh(x)); //7.811163549201245
//Retorna o arco-seno hiperbólico de um número.
console.log("5", Math.atan(x)); //1.5699859542008134
//Retorna o arco-tangente de um número (arctanx).
console.log("6", Math.atanh(x)); // NaN
//Retorna o arco-tangente hiperbólico de um número (arctanx). Se o parametro passado for entre 1 e -1, 1 e -1 é == infinite, fora disso o valor e NaN
console.log("7", Math.atan2(x, y)); // 0.21400218863832302
//Retorna o arco-tangente do quociente de seus argumentos. Retornando entre raio e -raio
console.log("8", Math.cbrt(x)); //10.726014668827325
//Retorna a raiz cúbica de um número x3).
console.log("9", Math.ceil(x)); //1234 utilizado pra arredondar
//Retorna o menor inteiro que é maior ou igual a um número.
console.log("10", Math.cos(x)); // -0.7985506235875843
//Retorna o coseno de um número (cosx).
console.log("11", Math.cosh(x)); //Infinity
//Retorna o coseno hiperbólico de um número .
console.log("12", Math.exp(x));// infinity
//Retorna ex, onde x é o argumento, e e é a constante de Euler (2.718...), a base do logaritmo natural. parametro aceito e um number entre 1 e -1
console.log("13", Math.expm1(x));
//Retorna ex-1. Como se fosse Math.exp(x) - 1
console.log("14", Math.floor(x));
//Retorna o maior inteiro que é menor ou igual a um número.
console.log("15", Math.fround(x));
//Retorna a mais próxima representação de ponto flutuante de precisão-única de um número.
console.log("16", Math.imul(x));
//Retorna o resultado de uma multiplicação de inteiro de 32-bit.
//Exemple: Math.imul(-1, 8) == -8; Math.imul(-2, -2) == 4
console.log("17", Math.log(x));
//Retorna o logaritmo natural (logex ou lnx) de um número.
console.log("18", Math.random())
// Retorna um valor randomico, entre 0 e 1
console.log("19", Math.round(20.49)) // 20
//Retorna o valor de um número arredondado para o inteiro mais proximo.
console.log("20", Math.tan(x))//-0.7537751984442329
//Retorna a tangente de um número (tanx).
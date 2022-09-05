const text = " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "

// maneira de deletar espacos desnecessarios no inicio e o no final da string
const sortText = "    Lorem Ipsum "
const Spacer1 = /\s+\s/gi;
const result = sortText.replace(Spacer1, "");

const Spacer2 = /\S/g;
const resultSpacer = sortText.match(Spacer2)
console.log("Spacer1",resultSpacer)

const rightWay = sortText.trim()
console.log("rightWay",result)


// validando valores
const numbertext = "42 42 42"
const numberRegex = /^(\d+)\s\1\s\1$/ // e meio que uma pergunta: os numeros estão divididos assim. O primeiro pega todos os numeros e \s pega o espaco e o \1 pega os numeros s
const result2 = numberRegex.test(numbertext)
console.log(result2)// retorno do valor e true

// Analizando number e letras prepetidas
const text3 = "Timmmmber";
const Text3Regex = /Tim{4}ber/
const result3 = Text3Regex.test(text3)
console.log(result3)// retorno do valor e true

// Procurar palavras com partes que eu desconheco uma letra,mas nao sei uma letra de uma palavra
const text4 = "Aluguel" // Aluguel ou Aluguer
const Text4Regex = /Alugue[a-z]/
const result4 = Text4Regex.test(text4)
console.log("result4",result4)

// procurar por numeros na string, não podem conter main de um espaços
const text5 = "42 42 42"
const Text5Regex = /\d/g;
const result5 = text5.match(Text5Regex);
console.log(result5)

// Procurar palavras em todo o texto
const text6 = 
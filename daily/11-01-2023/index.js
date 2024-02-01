const obj = {
    "{": "}",
    "(": ")",
    "[": "]",
}

const test = (str) => {
 const caracter = str.split(" ").join("").split("")
 
caracter.map((item, index) => {
 caracter.find((item2, index2) => {
   if(obj[item] === item2 && index < index2){
     console.log(caracter)
     console.log(index, index2)
    caracter[index] = null
    caracter[index2] = null
  }
 })
})
  return caracter.every(item => !item)  
}

test("([{}({}[)])")

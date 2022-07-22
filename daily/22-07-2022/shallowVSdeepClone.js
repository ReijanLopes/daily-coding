const person = {
    name: "Andrei",
    occupation: {
       role: "Engineer",
       company: "AgroAtlas"
    }
  }

  // TODO Implement changeOccupationName
  const result = changeOccupationName(person, "Manager"); // returna um objeto person onde person.occupation.role === 'Manager'
  
  console.log('Pass = ', result.occupation.role === 'Manager');
  
   
function changeOccupationName(person, name){
    // const clone = [...person] // isso e uma referencia de uma referencia => deep clone
    //const clone = JSON.parse(JSON.stringify(person)); // ruim, lento, custoso => shallow clone  
    //const clone = eval(original.toSource());// ruim, fuja disso => shallow clone 
    const clone = {
        name: "Andrei",
        occupation: {
           role: [...person.occupation.role],
           company: "AgroAtlas"
        }
      } // se seu objetor for pequeno so refira ele inteiro, como o exemplo acima
      // se for grande então refaça todo o objeto
     clone.occupation.role = name
    console.log("foi",clone)
    return clone
}

console.log("test 1",person);
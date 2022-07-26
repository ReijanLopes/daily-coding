// adiciona um obj como o primeiro da grupo de arrays, e retorna o array completo

const myArray = [{name: "reijan", birthday: "22/12/1234"}, {name: "Jose", birthday: "22/12/1234"}]
const addArray = myArray.unshift({name: "Marcos", birthday: "22/12/1234"})
console.log(addArray)
//[
//  { name: 'Marcos', birthday: '22/12/1234' },
//  { name: 'reijan', birthday: '22/12/1234' },
//  { name: 'Jose', birthday: '22/12/1234' }
//]
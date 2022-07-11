let arrayName = [
    "Reijan", "Ruan", "Lucas", "Jonas", "Marcos"
]

for (const name of arrayName) {
    console.log(name.toUpperCase())
}

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}


//Function loops
arrayName.map(name => console.log(name.toUpperCase()))

arrayName.forEach(name => {
    console.log(name)
});
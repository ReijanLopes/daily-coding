
function outerFunction(){
	let count = 0;
	function plusOne(){
		count++
		return count
	}
	function minusOne(){
		count--
		return count
	}
	return {
		plusOne: plusOne(),
		minusOne: minusOne()
}

	
}

const innerFuncs = outerFunction()

console.log(innerFuncs.minusOne)
console.log(innerFuncs.plusOne)


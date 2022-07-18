
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

function personAccount() {
	const firtName = "Reijan";
	const lastName = "Lopes";
	const mainIncome = 2500;
	const extraWorkIncome = 900;
	const marketplaceExpenses = 1500;
	const residenceExpenses = 600;

	function totalIncome(){
		return extraWorkIncome + mainIncome
	}
	function totalExpense(){
		return residenceExpenses + marketplaceExpenses
	}
	function accountBalance(){
		return totalIncome - totalExpense
	}
	
	return {
		totalIncome: totalIncome(),
		totalExpense: totalExpense(),
		accountBalance: accountBalance()
	}
}
const Account = personAccount()

console.log(Account.totalIncome)
console.log(Account.totalExpense)
console.log(Account.accountBalance)
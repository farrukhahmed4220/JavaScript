let myAccount = {
    name:'FARRUKH AHMED',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000
//otherAccount={}

let addExpense = function(account, amount){
account.expenses = account.expenses + amount
}

//addExpense(myAccount, 2.50)
//console.log(myAccount)

//Challenge area 
//add income
//reset income
//getAccountSummary
//Account for Andrew has $900. $1000 in income. $100 in expenses

let addIncome = function(account, income){
    account.income= account.income + income
}

let resetAccount = function(account){
    account.income = 0
    account.expenses=0
}

let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has ${balance}. ${account.income} in income. ${account.expenses} in expenses`
}


//addIncome
//addExpenses
//addExpenses
//getAccountSummary
//resetAccount
//getAccountSummary

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
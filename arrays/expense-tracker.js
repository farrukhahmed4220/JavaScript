const account = {
    name: 'Andrew Mead',
    expenses:[],
    income:[],
    addExpense:function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome:function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalexpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function(expense){
            totalexpenses = totalexpenses + expense.amount
        })

        this.income.forEach(function(income){
            totalIncome =totalIncome + income.amount
        })

        accountBalance = totalIncome - totalexpenses

        return `${this.name} has a balance of $${accountBalance}.$${totalIncome} in income. $${totalexpenses} in expenses`
    }
}


//Expense -> description , amount
//addExpense -> description, amount
//getAcccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses.

//1. add income array to account
//2. addIncome method -> description, amount
//3. Tweak getAccountSummary
//Anrew Mead has a balance of $10. $100 in income.$90 in expenses


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
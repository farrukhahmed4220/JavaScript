// Multiple arguments
let add = function(a, b, c){
    return a + b + c 
}

let result = add(10,20,30)
console.log(result)

// Default arguments
let getScoreText = function(name = 'Anonymous' , score = 0){
    //return 'Name : ' + name +  '- Score : ' + score
    return `Name : ${name}  - Score : ${score}` //string template
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)

//Challenge area
// total, tipPercent 0.2


let cal = function(total = 0, tipPercent = 0.2){
    return 'Total is: ' +total+ '- Tip Total:' + total*tipPercent

}

let tipCal = cal(1550)
console.log(tipCal)

//String Template
let name = 'Farrukh'
let age = 22

console.log(`Hey I am ${age} years old. Hey, my name is ${name}`)

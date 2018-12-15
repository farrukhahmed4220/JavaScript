let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum= Math.floor(Math.random() * (max - min + 1))
console.log(randomNum)

//Challenge Area

//1-5  true-if correct    false-if not correct

let makeGuess = function(guess){
    let randomNum = Math.floor(Math.random() * (5+1) )
    if(guess === randomNum){
        return true
    }else {
        console.log(`Correct answer is ${randomNum}`)
        return false
    }
}

console.log(makeGuess(1))

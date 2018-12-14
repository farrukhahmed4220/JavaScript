// Function - input , code , output(return value)

let greetUser = function(){
    console.log('Welcome User !')
}

greetUser()
greetUser()
greetUser()

let square = function(num){
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

//Challenge area

//convert fahenheit to celsius
// call a couple of times (32 -> 0) (68 -> 20)
//print the converted values

let tempConv = function(fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let t1 = tempConv(32)
let t2 =tempConv(68)

console.log('Temperature in celsius :' +t1)
console.log('Temperature in celsius :' +t2)

//var is function based variable and it can be access 
//outside the function block also
//with var we can declare the variable twice

var firstName = 'farrukh'

var firstName = 'ahmed'
console.log(firstName)

//
if(10 === 10){
    var fname = 'faiq'
}
console.log(fname)


//
const setName = function(){
    var newName = 'jen'
}

setName()
//console.log(newName)

//with var we can access variable before decalaration
console.log(age)
var age

//strange behavior
console.log(a)
var a=10

//
b=10
console.log(b)
var b
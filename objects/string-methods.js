let name = ' Farrukh Ahmed        '


//for JS documentation go and google MDN-JavaScript
//Length property
console.log(name.length)

//Convert to upper case
console.log(name.toUpperCase())

//convert to lowercase
console.log(name.toLowerCase())

//Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

//Trim method
console.log(name.trim())

//Challenge Area

//isValidPassword
let isValidPassword = function(password){
     if(password.length > 8 && !password.includes('password')){
        return true
     }else{
            return false
     }
}
//length is more than 8 - and it does not contain the word password
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('asdfp!@#$%^&'))
console.log(isValidPassword('asdfpasdOPIpassword'))
console.log(isValidPassword('asdfpasdOPI'))
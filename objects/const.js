const isRaining  = true

//isRaining = false

console.log(isRaining)

// the difference between const base variable and let based variable is 
//we cant reassign variable in const based variable
//and in let based variable we can reassign
//it is better to use const based variable where you already know that you dont need to reassign a variable .

const person = {
    age: 22
}

//person = {}     //it will give error bcz we are reassigning it 

//but we can manipulate the object
person.age= 24
console.log(person.age)




//Challenge Area

const gradeCalc = function(score, totalScore){
    const percent = (score / totalScore) * 100
    let letterGrade = ''

    if(percent >= 90 && percent<=100){
        letterGrade = 'A'

    }else if (percent >= 80 && percent <= 89) {
        letterGrade = 'B'
    } else if (percent >= 70 && percent <= 79) {
        letterGrade = 'C'
    }else if (percent >= 60 && percent <= 69) {
        letterGrade = 'D'
    }else if (percent >= 0 && percent <= 59) {
        letterGrade = 'F'
    }

    return `You got ${letterGrade} (${percent}%)!`

}

const result = gradeCalc(8, 20)
console.log(result)
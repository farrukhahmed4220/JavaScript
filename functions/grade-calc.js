//students score, total possible score
// 15/20 -> You got a C {75%} !
// A 90-100 , B 80-89, C 70-79, D60-96, F 0-59

let gradeCalc = function(score, totalScore){
    let percent = (score / totalScore) * 100
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

let result = gradeCalc(8, 20)
console.log(result)
// Create an array with five todos
//You have x todos
//Print the first and second to last items - > TODO: walk the dog

const todos = ['order cat food', 'clean kitchen', 'Buy food', 'Do work', 'Exercise']



console.log(`You have ${todos.length} todos!`)
console.log(`TODOS: ${todos[0]}`)
console.log(`TODOS: ${todos[todos.length - 1]}`)
console.log(`TODOS: ${todos[todos.length - 2]}`)

todos.forEach(function(todo, index){    //passing a function into a function is called a callback function
    const num = index +1
    console.log(`${num}, ${todo}`)
})

/*
console.log(todos)
todos.splice(2,1)
console.log(todos)a
todos[todos.length - 1] = 'new item'
console.log(todos)
todos.shift()
console.log(todos)*/

//Delete the 3rd item
//add a new item onto the end
//remove the first item  from the list





//Challenge area 'FOR loop'

//1.Order cat food
//2.clean kitchen
//...
console.log('######################')

for(let count=0; count < todos.length; count++){
    console.log(`${count+1}. ${todos[count]}`)
}

//#############SORTING ARRAY ###############
console.log('############## SORTING ARRAY #############')

const sortTodos = function(todos){
    todos.sort(function(a, b){
        if (a.completed === true) {
            return -1
        }else if(b.completed === false){
            return 1
        }else{
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

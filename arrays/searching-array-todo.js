const todos1 = ['order cat food', 'clean kitchen', 'Buy food', 'Do work', 'Exercise']

//1. convert array to array of objects -> text, completed
//2. convert function to remove a todo  by text value

const todos = [{
    text:'order cat food',
    completed: true
}, {
    text:'clean kitchen',
    completed: true
}, {
    text:'buy food',
    completed: false
}, {
    text:'do work',
    completed: false
}, {
    text:'Exercise',
    completed: true
}]

let deletetodo = function(todos, todoText){
    let index = todos.findIndex(function(todo){
        return todo.text === todoText
    })
    if(index > -1){
        todos.splice(index, 1)
    }
}


//deletetodo(todos, 'buy food')
console.log(todos)

//%%%%%%%%%%%%%%%%%%%%filtering array %%%%%%%%%%%%%%%%%5
//challenge area
console.log('%%%%%%%%%% filtering area %%%%%%%%%')
const getThingsToDo = function(todos){
    return todos.filter(function(todo){
        return !todo.completed
    })

}

console.log(getThingsToDo(todos))


//#############SORTING ARRAY ###############
console.log('############## SORTING ARRAY #############')

const sortTodos = function(todos){
    todos.sort(function(a, b){
        if (a.completed < b.completed) {//(!a.completed && b.completed)
            return -1
        }else if(b.completed < a.completed){//(!b.completed && a.completed)
            return 1
        }else{
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

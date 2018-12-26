
/*const ps= document.querySelectorAll('p')

ps.forEach(function(p){

    if(p.textContent.includes('for')){
        p.remove()
    }
    
    //p.remove(includes('the'))

    //console.log(p.textContent)
    //p.remove()
})*/ 



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

//######## 11.Todo Filter Challenge #################
// 1. Setup a div contain for todos
// 2. Setup filters (SearchText) and write up a new filter input to change it
// 3. create a renderTodos function to render and render the latest filtered data

const filters = {
    searchText:'',
    hideCompleted: false
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch =todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const  hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    

    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function(todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    }) 

}
renderTodos(todos,filters)

//Starts

// ENDs




//listen for new todo creation

/*document.querySelector('button').addEventListener('click',function(e){
    console.log('Add new Todo...')
})*/

/*document.querySelector('#add-todo').addEventListener('click',function(e){
    console.log('Add new todo .........')
})*/


// Listen  for todo text change
/*document.querySelector('#new-todo').addEventListener('input', function(ee){
    const p = document.createElement('p')
    p.textContent = ee.target.value
    document.querySelector('body').appendChild(p)
})*/


document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})


//########## Challenge Area Working with Forms ##################

//1. Create a form with a single input for todo text
//2. Setup an submit handler and cancel the deafult action
//3. Add a new item to the todo array with that text data(completed value of false)
//4. Rerender the application
//5. clear the input field value


document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.elements.addTodo.value)
    todos.push({
        text: e.target.elements.addTodo.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ''

})

//##############Challenge Area Checkboxes#########
//1.Create a checkbox and setup  event listener -> 'Hide Completed'
//2.Create new hideCompleted filter (default false)
//3.Update hideCompleted an rerender  list on checkboxe change
//4.Setup renderTodos too remove completed items

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
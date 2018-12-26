const note= [ {
    title:'My next trip',
    body:'I would like to go to spain'
}, {
    title:'Habbits to work on',
    body:'Exercise, eating a bit better'
}, {
    title:'Office modification',
    body:'Get a new seat'
}]

/*
//DOM-> Document Object Model


//Query and remove
//const p = document.querySelector('p')
//p.remove()

// Quert all and remove
const ps= document.querySelectorAll('p')

ps.forEach(function(p){
    
    p.textContent = '********'

    //console.log(p.textContent)
    //p.remove()
})

//add a new element
const newParagraph= document.createElement('p')
newParagraph.textContent = 'This is a new element from Javacript'
document.querySelector('body').appendChild(newParagraph)
*/

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked'
})



document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(note, filters)
})


const filters = {
    searchText: ''
}

const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(note, filters)



//################################ WORKING WITH FORM ################

/*document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault()      //prevents to change url when you click submit button of the form
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})*/





//############################ 13. Checkboxes #######################
/*document.querySelector('#for-fun').addEventListener('change' , function(e){
    console.log(e.target.checked)
})*/



//############## 14. Dropdowns ##########################
document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})




//---Single--
//p
//#replace
//.item

//Multiple
//p#order
//button.inventory
//h1#title.application
//h1.application#title
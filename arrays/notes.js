//arr.push()
//arr.pop()
//arr.shift()
//arr.unshift()
//arr.length
//arr.splice(index, no.of item to manipulate, add new item to that index{optional})


const notes = ['Note 1', 'Note 2', 'Note 3']



console.log(notes[22])

//search for MDN array for more documentation


//console.log(`the poped item is: ${notes.pop()}`)
//notes.push('My new Note 4')

//console.log(notes.shift())
//notes.unshift('My Note 1')

//notes.splice(1,0, 'This is the new second item')

notes [2] = 'This is new note 3'
notes.forEach(function(item, index){
    
    console.log(item)
})
 
console.log(notes)
console.log(notes.length)
//console.log(notes)



console.log('####################')
for(let count = 0; count < notes.length; count++){
    console.log(notes[count])
}


//Searching array part1
console.log('############SEARCHING ARRAY part-1#############')
console.log(notes.indexOf('Note 1'))    //if the index is -1 means item does not exist in array , if 0 or greater than 0 means exist somewhere in array

const arr= [ {
    title:'My next trip',
    body:'I would like to go to spain'
}, {
    title:'Habbits to work on',
    body:'Exercise, eating a bit better'
}, {
    title:'Office modification',
    body:'Get a new seat'
}]


console.log(arr.indexOf({}))
console.log({} === {}) //an object can not be same


//can be same by this
let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject)

//
let index = arr.findIndex(function(arr, index){
    console.log(arr)
    return arr.title === 'Habbits to work on'
})

console.log(index)


//Searching array part2
console.log('############SEARCHING ARRAY part-2#############')

const findNote = function(arr, arrTitle){
    const index= arr.findIndex(function(arrs, index){
        return arrs.title === arrTitle
    })

    return arr[index]
}

const noteView = findNote(arr, 'Office modification')
console.log(noteView)

console.log('------------------------------')

const findN = function(arr, arrTitle){
    return arr.find(function(arrs, index){
        return arrs.title === arrTitle
    })

}

const newnoteView = findN(arr, 'Office modification')
console.log(newnoteView)

//arr.find()
//arr.indexOf()
//arr.findIndex()



//############### Filtering Array ###############################
console.log('##### Filtering ARRAY #############')

const filterArray = function(arr, query){
    const filteredNotes = arr.filter(function(arrs, index){
        const isTitleMatch = arrs.title.includes(query)
        const isBodyMatch = arrs.body.includes(query)
        return (isTitleMatch || isBodyMatch)
    }) 

    return filteredNotes
}


console.log(filterArray(arr, 'better'))


//########### SORTING ARRAY #######################
console.log('############ SORTING ARRAY ###########')

const sortNotes = function(arr){
    arr.sort(function(a,b){
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}

sortNotes(arr)
console.log(arr)
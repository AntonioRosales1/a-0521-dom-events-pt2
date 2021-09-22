/**
 * 
 * 
 * ADDING A NOTE
 * 
 */

let ul = document.querySelector('#list')

document.getElementById('add-btn').addEventListener('click', function(e){

    e.preventDefault()

    let addInput = document.getElementById('add-input')

    if(addInput.value !== ''){
        console.log('test')
        //create elements
        var li = document.createElement('li'),
            firstP = document.createElement('p'),
            secondP = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input')

        //create attributes
        firstIcon.className = "fa fa-pencil-square-o"
        secondIcon.className = "fa fa-times"
        input.className = "edit-note"
        input.setAttribute('type','text')

        //add text to first paragraph
        firstP.textContent = addInput.value

        //appending stage
        secondP.appendChild(firstIcon)
        secondP.appendChild(secondIcon)
        li.appendChild(firstP)
        li.appendChild(secondP)
        li.appendChild(input)
        ul.appendChild(li)
        addInput.value = '';
    }
})

/**
 * 
 * 
 * EDIT NOTE
 * 
 */

// document.createElement

let createDiv= document.createElement('div')
    console.log(createDiv);


// innetText 

let enterInnerText = document.createElement('h1')
    enterInnerText.innerText="ravi"
    console.log(enterInnerText);

// append child

// creating two elememt
let createNewDiv = document.createElement('div')
let createh1 = document.createElement('h1')
// inserting text inside h1 tag
createh1.innerText = "this is inner text"
// insert h1 tag inside div tag
createNewDiv.appendChild(createh1)
// insert div inside the html body
document.body.appendChild(createNewDiv)



// set attribute:- It is a function which is use to create attribute for an element

let divNew = document.createElement('div')
divNew.setAttribute('id','parent')
console.log(divNew);

// o/p <div id='parent'> </div>
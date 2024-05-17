// document.getElementById('container');
// console.log('parent', container.parentElement);


// console.log('previous sibling...',container.previousElementSibling)

// console.log('Next Sibling...' ,container.nextElementSibling)
// console.log('children',container.children);


// const body = document.body;

// console.log('Last Child', body.lastElementChild);
// console.log('First child', body.firstElementChild);

//Editing DOM
const containerText = document.getElementById('container-text')
containerText.innerHTML = 'Am I really a child?'

//Creating DOM element
const newheading = document.createElement('h1');
containerText.append(newheading)
newheading.innerHTML = 'Introduction'

newheading.style.color = 'red'

const button =document.getElementById('button')

button.style.border = 'none';
button.style.padding = "10px 5px";
button.style.background = "pink";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

button.addEventListener('click', function(){
    button.innerHTML = 'Clicked!'
    button.style.backround = "pink"
    button.style.color = "blue"
})

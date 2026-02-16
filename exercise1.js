//Name: Kyle Gladden
//Assessment: Lab#3

const buttons = document.querySelectorAll('.color-btn');

function changeColor() { //function that uses 'this' to change the background color to yellow
    this.style.backgroundColor = 'Yellow'; 
}

buttons.forEach(button => {
    button.addEventListener('click', changeColor); //attches the event listener to the function changeColor 
});
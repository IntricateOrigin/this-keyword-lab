//Name: Kyle Gladden
//Assessment: Lab#3

const buttons = document.querySelectorAll('.color-btn');

function changeColor() {
    this.style.backgroundColor = 'Yellow'; 
}

buttons.forEach(button => {
    button.addEventListener('click', changeColor);
});
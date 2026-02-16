//Name: Kyle Gladden
//Assessment: Lab#3

const swatches = document.querySelectorAll('.swatch');

function setColor() { //function that sets the background color of the element clicked using the color of dataset color of the same element
    this.style.backgroundColor = this.dataset.color;
}

swatches.forEach(swatch => { 
    swatch.addEventListener('click', setColor); //attaches the event handler to the setcolor function
});


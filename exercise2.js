//Name: Kyle Gladden
//Assessment: Lab#3

const swatches = document.querySelectorAll('.swatch');

function setColor() {
    this.style.backgroundColor = this.dataset.color;
}

swatches.forEach(swatch => {
    swatch.addEventListener('click', setColor);
});


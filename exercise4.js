//Name: Kyle Gladden
//Assessment: Lab#3

const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
    // BUG: this.classList.add('active') throws an error
    //It gives an error because arrow functions dont have its own 'this' binding, it uses the 'this' binding from the window. Since the window doesnt have the 'classList' property, it returns error
 
    event.currentTarget.classList.add('active'); //Using event.currentTarget makes sure to refer to the element that is attached to the listener. So using that, it adds the 'active' property the refered element.
});
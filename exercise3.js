//Name: Kyle Gladden
//Assessment: Lab#3

const display = document.querySelector('#count-display');

//counter object that has the increment, decrement and display content update operations
const counterApp = {
    count: 0,
    increment: function() { // increment function which updates the 'this' count by 1
        this.count++;
        display.textContent = this.count;
        
    },
    decrement: function() { //decrement function which updates the 'this' count by 1
        this.count--;
        display.textContent = this.count;
    }
};

const incBtn = document.querySelector('#inc-btn');
const decBtn = document.querySelector('#dec-btn');

incBtn.addEventListener('click', counterApp.increment.bind(counterApp));  //Event listener that links the increment method to the counterApp object using bind
decBtn.addEventListener('click', counterApp.decrement.bind(counterApp));  //Event listener that links the decrement method to the counterApp object using bind
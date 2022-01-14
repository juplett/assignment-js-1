'use strict';

const purple = document.getElementById('purple');
const green = document.getElementById('green');
const orange = document.getElementById('orange');

purple.addEventListener('click', function() {
    this.classList.toggle('purple');

    if (this.classList.contains('purple')) {
        this.innerText = 'Click me to make me White';
    } else 
    this.innerText = 'Click me to make me purple'
})

green.addEventListener('click', function() {
    this.classList.toggle('green');

    if (this.classList.contains('green')) {
        this.innerText = 'Click me to make me White';
    } else 
    this.innerText = 'Click me to make me green'
})

orange.addEventListener('click', function() {
    this.classList.toggle('orange');

    if (this.classList.contains('orange')) {
        this.innerText = 'Click me to make me White';
    } else 
    this.innerText = 'Click me to make me orange'
})

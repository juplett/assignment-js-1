'use strict';


// topic: interaction


const message = document.getElementById('message');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    message.classList = 'is-visable';
})
















// const purple = document.getElementById('one');
// const green = document.getElementById('two');
// const orange = document.getElementById('three');

// function toPurple() {
//     purple.style.color = '#b84eff';
// }

// green.onclick = function() {
//     this.style.color = '#0f9';
// }

// orange.addEventListener('click', function() {
//     this.style.color = '#f90';
// })


// // link: https://newbedev.com/increase-the-font-size-with-a-click-of-a-button-using-only-javascript

// function increaseFontSize(id, increaseFactor){
//     let font = document.getElementById(id);
//     let style = window.getComputedStyle(font).getPropertyValue('font-size');
//     let currentSize = parseFloat(style);
//     font.style.fontSize = (currentSize + increaseFactor) + 'px';
// }

// // function increaseFont() {
// //     let font = document.getElementById('one').style.fontSize;
// //     font++;
// //     let font2 = document.getElementById('two').style.fontSize;
// //     font2++
// //     let font3 = document.getElementById('three').style.fontSize;
// //     font3++
// // }


// function changeBgColor() {
//     let randomColor = '#'+Math.floor(Math.random()*16777125).toString(16);
//     document.body.style.backgroundColor = randomColor;  
//     return randomColor;

    
// }



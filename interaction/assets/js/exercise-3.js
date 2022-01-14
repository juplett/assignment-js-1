'use strict';

const red = document.getElementById('clrChange');

function toRed() {
    red.style.color = '#FF0000'
}

function increaseFont(id, increaseFactor){
    let font = document.getElementById(id);
    let style = window.getComputedStyle(font).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    font.style.fontSize = (currentSize + increaseFactor) + 'px';
}

document.getElementById('change').onclick = changeColor;   

function changeColor() {
    document.body.style.color = "purple";
    return false;
}



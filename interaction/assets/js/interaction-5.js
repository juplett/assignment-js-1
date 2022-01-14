'use strict';

const section = document.querySelector('section');
const button = document.querySelector('button');
//Creating a '<p>'

function newParagraph() {
const newElement = document.createElement('p');
const content = document.createTextNode('Sup Fucker'); 
newElement.appendChild(content);
section.append(newElement);
}
button.addEventListener('click', newParagraph);

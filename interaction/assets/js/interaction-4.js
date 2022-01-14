'use strict';


const names = document.getElementById('list').childNodes;

names.forEach(item => {
    item.addEventListener('click', () => {
        alert(`Hi, My name is ${item.innerText}`)
    })
})
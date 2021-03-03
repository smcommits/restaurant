import {pageLoadContent} from './pageLoad.js'
import {createContact} from './contact'
import createMenu from './menu'
import {appendChildren} from './domHandler'

pageLoadContent();


let parent = document.getElementById("content");

let tabContainer = document.createElement('ul');
let tab1 = document.createElement('li');
let tab2 = document.createElement('li');

tab1.textContent = "Menu";
tab2.textContent = "Contact";

tabContainer.setAttribute('class', 'tabs');

appendChildren(tabContainer, [tab1, tab2]);
parent.appendChild(tabContainer);

let menu = createMenu();

let contact = createContact();
appendChildren(parent, [menu, contact]);

tab1.addEventListener('click',  () => {
  let element = document.querySelectorAll('.tabbed-container');
  element.forEach((element) => {
    element.style.display = "none";
  })

  let el = document.querySelector('.menu-tab');
  el.style.display = 'block';
})

tab2.addEventListener('click',  () => {
  let element = document.querySelectorAll('.tabbed-container');
  element.forEach((element) => {
    element.style.display = "none";
  })

  let el = document.querySelector('.contact-tab');
  el.style.display = 'block';
})

import {pageLoadContent} from './modules/pageLoad.js'
import {createContact} from './modules/contact'
import createTabs from './modules/tabbed'
import {appendChildren} from './modules/domHandler'

pageLoadContent();
createTabs();
bindTabEvents();

function bindTabEvents()  {
  let menuTab = document.getElementById('menuTab');
  let contactTab = document.getElementById('contactTab');

  menuTab.addEventListener('click',(event) => {switchTabs(event)});
  contactTab.addEventListener('click', (event) => {switchTabs(event)});
};

function switchTabs(className) {
  let element = document.querySelectorAll('.tabbed-container');
  element.forEach((element) => {
    element.style.display = "none";
  })

  let tabButtons = document.querySelectorAll('.active');
  tabButtons.forEach((button) => {
    button.classList.remove('active');
  })

  event.target.classList.toggle('active');
  className = event.target.getAttribute('data-attribute');
  let el = document.getElementById(className);
  el.style.display = 'block';
}

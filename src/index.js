import pageLoadContent from './modules/pageLoad';
import createTabs from './modules/tabbed';


function switchTabs(event) {
  const element = document.querySelectorAll('.tabbed-container');
  element.forEach((element) => {
    element.style.display = 'none';
  });

  const tabButtons = document.querySelectorAll('.active');
  tabButtons.forEach((button) => {
    button.classList.remove('active');
  });

  event.target.classList.toggle('active');
  const className = event.target.getAttribute('data-attribute');
  const el = document.getElementById(className);
  el.style.display = 'block';
}

function bindTabEvents() {
  const menuTab = document.getElementById('menuTab');
  const contactTab = document.getElementById('contactTab');

  menuTab.addEventListener('click', (event) => { switchTabs(event); });
  contactTab.addEventListener('click', (event) => { switchTabs(event); });
}


pageLoadContent();
createTabs();
bindTabEvents();

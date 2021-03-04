import pageLoadContent from './modules/pageLoad';
import createTabs from './modules/tabbed';
import createMenu from './modules/menu';
import createContact from './modules/contact';

const switchTabs = (event) => {
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
};

const bindTabEvents = () => {
  const homeTab = document.getElementById('homeTab')
  const menuTab = document.getElementById('menuTab');
  const contactTab = document.getElementById('contactTab');

  [homeTab, menuTab, contactTab].forEach((tab) => {
    tab.addEventListener('click', (event) => {switchTabs(event)});
  })
};

createTabs()
pageLoadContent();
bindTabEvents();
createMenu();
createContact();

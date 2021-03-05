import { appendChildren } from './domHandler';

const createTabs = () => {
  const parent = document.getElementById('content');
  const container = document.createElement('div');

  const tabContainer = document.createElement('ul');
  const tab1 = document.createElement('li');
  const tab2 = document.createElement('li');
  const tab3 = document.createElement('li');

  tab1.textContent = 'Home';
  tab2.textContent = 'Menu';
  tab3.textContent = 'Contact';

  container.setAttribute('class', 'tab-container');
  tabContainer.setAttribute('class', 'tabs');
  tab1.setAttribute('id', 'homeTab');
  tab1.setAttribute('data-attribute', 'home-tab');
  tab1.setAttribute('class', 'active');
  tab2.setAttribute('id', 'menuTab');
  tab2.setAttribute('data-attribute', 'menu-tab');
  tab3.setAttribute('id', 'contactTab');
  tab3.setAttribute('data-attribute', 'contact-tab');

  appendChildren(tabContainer, [tab1, tab2, tab3]);
  appendChildren(container, [tabContainer]);
  parent.appendChild(container);
};

export {
  createTabs as default,
};

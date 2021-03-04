import createMenu from './menu';
import createContact from './contact';
import { appendChildren } from './domHandler';

function createTabs() {
  const parent = document.getElementById('content');
  const container = document.createElement('div');

  const tabContainer = document.createElement('ul');
  const tab1 = document.createElement('li');
  const tab2 = document.createElement('li');
  const menu = createMenu();
  const contact = createContact();

  tab1.textContent = 'Menu';
  tab2.textContent = 'Contact';

  container.setAttribute('class', 'tab-container');
  tabContainer.setAttribute('class', 'tabs');
  tab1.setAttribute('id', 'menuTab');
  tab1.setAttribute('data-attribute', 'menu-tab');
  tab1.setAttribute('class', 'active');
  tab2.setAttribute('id', 'contactTab');
  tab2.setAttribute('data-attribute', 'contact-tab');

  appendChildren(tabContainer, [tab1, tab2]);
  appendChildren(container, [tabContainer, menu, contact]);
  parent.appendChild(container);
}

export {
  createTabs as default,
};

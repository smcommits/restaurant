import {appendChildren, addAttributes, setTextContents} from './domHandler'

const createContact = () => {
 let container = document.createElement('div');
 let contact = contactInfo();

  container.appendChild(contact);

  container.classList.add('tabbed-container');
  container.setAttribute('id', 'contact-tab');
  container.style.display = 'none';

  return container;
}

function contactInfo() {
  let container = document.createElement('div');
  let header = document.createElement('h3');
  let address = document.createElement('p');
  let phone = document.createElement('p');

  setTextContents([header, address, phone], 
    ["Contact Us", 
    "Dummy Address Lorem Ipsum Sit Amet 29292929 Dummy Place", 
      "Telephone: 1-800-123-4567 Email: info@example.com"
    ]);

  appendChildren(container, [header, address, phone]);
  return container;
}


export {
  createContact as default
}



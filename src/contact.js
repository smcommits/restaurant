import {appendChildren, addAttributes} from './domHandler'

const createContact = () => {
  let container = document.createElement('div');
  let phoneContact = createPhoneContanct();

  container.appendChild(phoneContact);

  container.classList.add('tabbed-container', 'contact-tab');
  container.style.display = 'none';

  return container;
}

function createPhoneContanct() {
  let contact = document.createElement('span');
  contact.textContent = 'tesstting phone';
  return contact;
}


export {
  createContact
}

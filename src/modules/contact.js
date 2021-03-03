import {appendChildren, addAttributes} from './domHandler'

const createContact = () => {
  let containerContact = document.createElement('div');
  let phoneContact = createPhoneContanct();

  containerContact.appendChild(phoneContact);

  containerContact.classList.add('tabbed-container');
  containerContact.setAttribute('id', 'contact-tab');
  containerContact.style.display = 'none';

  return containerContact;
}

function createPhoneContanct() {
  let contact = document.createElement('span');
  contact.textContent = 'tesstting phone';
  return contact;
}


export {
  createContact as default
}

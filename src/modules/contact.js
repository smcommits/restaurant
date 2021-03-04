import { appendChildren, setTextContents } from './domHandler';

function contactInfo() {
  const container = document.createElement('div');
  const header = document.createElement('h3');
  const address = document.createElement('p');
  const phone = document.createElement('p');

  setTextContents([header, address, phone],
    ['Contact Us',
      'Dummy Address Lorem Ipsum Sit Amet 29292929 Dummy Place',
      'Telephone: 1-800-123-4567 Email: info@example.com',
    ]);

  appendChildren(container, [header, address, phone]);
  return container;
}
const createContact = () => {
  const parent = document.getElementById('content');
  const container = document.createElement('div');
  const contact = contactInfo();

  container.appendChild(contact);

  container.classList.add('tabbed-container');
  container.setAttribute('id', 'contact-tab');
  container.style.display = 'none';
  parent.appendChild(container);
};


export {
  createContact as default,
};

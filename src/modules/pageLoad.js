import { appendChildren } from './domHandler';
import aboutText from './content';

function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const home = document.createElement('a');
  const about = document.createElement('a');

  home.textContent = 'Home';
  home.setAttribute('href', '#');
  about.textContent = 'About';
  about.setAttribute('href', '#about');


  appendChildren(ul, [home, about]);
  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
}
function createHero() {
  const heroContainer = document.createElement('section');
  const heroHeadline = document.createElement('h2');

  heroHeadline.textContent = 'The Restaurant';
  heroContainer.setAttribute('class', 'hero-container');

  heroContainer.appendChild(heroHeadline);
  return heroContainer;
}
function createAbout() {
  const aboutContainer = document.createElement('section');
  const aboutTitle = document.createElement('h3');
  const aboutContent = document.createElement('p');

  aboutTitle.textContent = 'About Us';
  aboutContent.textContent = aboutText;
  aboutContainer.setAttribute('class', 'about-section');

  appendChildren(aboutContainer, [aboutTitle, aboutContent]);

  return aboutContainer;
}


const pageLoadContent = () => {
  const parent = document.getElementById('content');
  const header = createHeader();
  const hero = createHero();
  const about = createAbout();
  appendChildren(parent, [header, hero, about]);
};


export {
  pageLoadContent as default,
};

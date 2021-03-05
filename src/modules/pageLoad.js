import { appendChildren } from './domHandler';
import aboutText from './content';


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
  const container = document.createElement('div');
  const hero = createHero();
  const about = createAbout();
  container.classList.add('tabbed-container');
  container.setAttribute('id', 'home-tab');
  appendChildren(container, [hero, about]);
  parent.appendChild(container);
};


export {
  pageLoadContent as default,
};

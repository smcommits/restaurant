import {appendChildren, addAttributes, removeAllByClass} from './domHandler'
import image from './rest.jpg'
import {aboutText} from './content'

const pageLoadContent = () => {
  let parent = document.getElementById("content");
  let header = createHeader();
  let hero = createHero();
  let about = createAbout();
  appendChildren(parent, [header, hero, about]);
}


function createHeader() {
  let header = document.createElement("header");
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  let home = document.createElement("li");
  let about = document.createElement("li");
  let contact = document.createElement("li");

  home.textContent = "Home";
  about.textContent = "About";
  contact.textContent = "Contact";

  appendChildren(ul, [home, about, contact]);
  nav.appendChild(ul);
  header.appendChild(nav);
  
  return header;
}

function createHero() {
  let heroContainer = document.createElement("section");
  let heroHeadline = document.createElement("h2");

  heroHeadline.textContent = "The Restaurant";
  heroContainer.setAttribute('class', 'hero-container');

  heroContainer.appendChild(heroHeadline);
  return heroContainer;
}

function createAbout() {

  let aboutContainer = document.createElement('section');
  let aboutTitle = document.createElement('h3');
  let aboutContent = document.createElement('p');

  aboutTitle.textContent = "About Us";
  aboutContent.textContent = aboutText;
  aboutContainer.setAttribute('class', 'about-section');

  appendChildren(aboutContainer, [aboutTitle, aboutContent]);

  return aboutContainer;
}

export {
  pageLoadContent
}

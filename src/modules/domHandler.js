const appendChildren = (parent, arrayOfChildren) => {
  arrayOfChildren.forEach((child) => {
    parent.appendChild(child);
  })
}

const addAttributes = (element, dict) => {
  for (let key in dict) {
    element.setAttribute(key, dict[key]);
  }
}

const setTextContents = (arrayOfelement, arrayOfContent) => {
  for ( let i = 0; i < arrayOfelement.length; i++ ) {
    arrayOfelement[i].textContent = arrayOfContent[i];
  }
}

const removeAllByClass = (className) => {
  document.querySelectorAll(className).forEach(e => e.remove());
}

export {
  appendChildren,
  addAttributes,
  removeAllByClass,
  setTextContents
}






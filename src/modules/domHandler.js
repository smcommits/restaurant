const appendChildren = (parent, arrayOfChildren) => {
  arrayOfChildren.forEach((child) => {
    parent.appendChild(child);
  });
};

const setTextContents = (arrayOfelement, arrayOfContent) => {
  for (let i = 0; i < arrayOfelement.length; i += 1) {
    arrayOfelement[i].textContent = arrayOfContent[i];
  }
};

const removeAllByClass = (className) => {
  document.querySelectorAll(className).forEach(e => e.remove());
};

export {
  appendChildren,
  removeAllByClass,
  setTextContents,
};

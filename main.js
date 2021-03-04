/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ "./src/modules/domHandler.js");


function contactInfo() {
  const container = document.createElement('div');
  const header = document.createElement('h3');
  const address = document.createElement('p');
  const phone = document.createElement('p');

  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.setTextContents)([header, address, phone],
    ['Contact Us',
      'Dummy Address Lorem Ipsum Sit Amet 29292929 Dummy Place',
      'Telephone: 1-800-123-4567 Email: info@example.com',
    ]);

  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(container, [header, address, phone]);
  return container;
}
const createContact = () => {
  const container = document.createElement('div');
  const contact = contactInfo();

  container.appendChild(contact);

  container.classList.add('tabbed-container');
  container.setAttribute('id', 'contact-tab');
  container.style.display = 'none';

  return container;
};





/***/ }),

/***/ "./src/modules/content.js":
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutText)
/* harmony export */ });
const aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec finibus sollicitudin eros quis porttitor. Cras aliquam nibh 
                      a faucibus condimentum. Donec luctus venenatis aliquet. 
                      Fusce aliquam aliquet nibh ut ullamcorper. Integer rhoncus justo metus, 
                      in vehicula lorem volutpat ac. Integer justo quam, lacinia semper felis vel, 
                      finibus convallis lectus. Quisque pretium porta consectetur. Duis id euismod 
                      tellus, vitae aliquam eros. Morbi vitae neque vitae ex cursus molestie. 
                      Aliquam vehicula arcu sed ipsum interdum, pretium cursus eros facilisis. 
                      Curabitur et volutpat nisl. Cras non gravida arcu. Aliquam eu odio pretium, 
                      consequat dolor quis, accumsan ipsum. Nunc tristique enim a nisl feugiat luctus.`;





/***/ }),

/***/ "./src/modules/domHandler.js":
/*!***********************************!*\
  !*** ./src/modules/domHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendChildren": () => (/* binding */ appendChildren),
/* harmony export */   "removeAllByClass": () => (/* binding */ removeAllByClass),
/* harmony export */   "setTextContents": () => (/* binding */ setTextContents)
/* harmony export */ });
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




/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ "./src/modules/domHandler.js");


function createMenuList() {
  const parentlist = document.createElement('ul');

  const li1 = document.createElement('li');
  const sublist1 = document.createElement('ul');
  const subitem1 = document.createElement('li');
  const subitem2 = document.createElement('li');
  const subitem3 = document.createElement('li');
  const subitem4 = document.createElement('li');

  const li2 = document.createElement('li');
  const sublist2 = document.createElement('ul');
  const sub2item1 = document.createElement('li');
  const sub2item2 = document.createElement('li');
  const sub2item3 = document.createElement('li');
  const sub2item4 = document.createElement('li');

  li1.textContent = 'Amercian';
  li2.textContent = 'Indian';
  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.setTextContents)([subitem1, subitem2, subitem3, subitem4], ['Pizza', 'Burger', 'Sandwich', 'Fried Chicen']);
  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.setTextContents)([sub2item1, sub2item2, sub2item3, sub2item4], ['Biryani', 'Gulab Jamun', 'Paneer Makhni', 'Dosa']);

  [li1, li2].forEach((element) => { element.setAttribute('class', 'sub-list-head'); });
  [sublist1, sublist2].forEach((element) => { element.setAttribute('class', 'sub-list'); });

  [sub2item1,
    sub2item2,
    sub2item3,
    sub2item4,
    subitem1,
    subitem2,
    subitem3,
    subitem4].forEach((element) => { element.setAttribute('class', 'sub-list-item'); });

  parentlist.setAttribute('class', 'food-menu');


  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(sublist1, [subitem1, subitem2, subitem3, subitem4]);
  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(sublist2, [sub2item1, sub2item2, sub2item3, sub2item4]);
  li1.appendChild(sublist1);
  li2.appendChild(sublist2);
  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(parentlist, [li1, li2]);


  li1.appendChild(sublist1);
  li2.appendChild(sublist2);

  return parentlist;
}


const createMenu = () => {
  const container = document.createElement('div');
  const list = createMenuList();
  container.appendChild(list);

  container.classList.add('tabbed-container');
  container.setAttribute('id', 'menu-tab');
  return container;
};





/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoadContent)
/* harmony export */ });
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ "./src/modules/domHandler.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/modules/content.js");



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


  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ul, [home, about]);
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
  aboutContent.textContent = _content__WEBPACK_IMPORTED_MODULE_1__.default;
  aboutContainer.setAttribute('class', 'about-section');

  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(aboutContainer, [aboutTitle, aboutContent]);

  return aboutContainer;
}


const pageLoadContent = () => {
  const parent = document.getElementById('content');
  const header = createHeader();
  const hero = createHero();
  const about = createAbout();
  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(parent, [header, hero, about]);
};





/***/ }),

/***/ "./src/modules/tabbed.js":
/*!*******************************!*\
  !*** ./src/modules/tabbed.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTabs)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domHandler */ "./src/modules/domHandler.js");




function createTabs() {
  const parent = document.getElementById('content');
  const container = document.createElement('div');

  const tabContainer = document.createElement('ul');
  const tab1 = document.createElement('li');
  const tab2 = document.createElement('li');
  const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.default)();
  const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_1__.default)();

  tab1.textContent = 'Menu';
  tab2.textContent = 'Contact';

  container.setAttribute('class', 'tab-container');
  tabContainer.setAttribute('class', 'tabs');
  tab1.setAttribute('id', 'menuTab');
  tab1.setAttribute('data-attribute', 'menu-tab');
  tab1.setAttribute('class', 'active');
  tab2.setAttribute('id', 'contactTab');
  tab2.setAttribute('data-attribute', 'contact-tab');

  (0,_domHandler__WEBPACK_IMPORTED_MODULE_2__.appendChildren)(tabContainer, [tab1, tab2]);
  (0,_domHandler__WEBPACK_IMPORTED_MODULE_2__.appendChildren)(container, [tabContainer, menu, contact]);
  parent.appendChild(container);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageLoad */ "./src/modules/pageLoad.js");
/* harmony import */ var _modules_tabbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabbed */ "./src/modules/tabbed.js");




function switchTabs(event) {
  const element = document.querySelectorAll('.tabbed-container');
  element.forEach((element) => {
    element.style.display = 'none';
  });

  const tabButtons = document.querySelectorAll('.active');
  tabButtons.forEach((button) => {
    button.classList.remove('active');
  });

  event.target.classList.toggle('active');
  const className = event.target.getAttribute('data-attribute');
  const el = document.getElementById(className);
  el.style.display = 'block';
}

function bindTabEvents() {
  const menuTab = document.getElementById('menuTab');
  const contactTab = document.getElementById('contactTab');

  menuTab.addEventListener('click', (event) => { switchTabs(event); });
  contactTab.addEventListener('click', (event) => { switchTabs(event); });
}


(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_modules_tabbed__WEBPACK_IMPORTED_MODULE_1__.default)();
bindTabEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3RhYmJlZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw0REFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUtFOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFNRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCNkQ7O0FBRS9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw0REFBZTtBQUNqQixFQUFFLDREQUFlOztBQUVqQixtQ0FBbUMsZ0RBQWdELEVBQUU7QUFDckYsNkNBQTZDLDJDQUEyQyxFQUFFOztBQUUxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnREFBZ0QsRUFBRTs7QUFFdEY7OztBQUdBLEVBQUUsMkRBQWM7QUFDaEIsRUFBRSwyREFBYztBQUNoQjtBQUNBO0FBQ0EsRUFBRSwyREFBYzs7O0FBR2hCO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUtFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFNEM7QUFDWjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxFQUFFLDJEQUFjO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDZDQUFTO0FBQ3RDOztBQUVBLEVBQUUsMkRBQWM7O0FBRWhCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFjO0FBQ2hCOzs7QUFLRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUQ4QjtBQUNNO0FBQ1E7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUFVO0FBQ3pCLGtCQUFrQixpREFBYTs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFjO0FBQ2hCLEVBQUUsMkRBQWM7QUFDaEI7QUFDQTs7QUFJRTs7Ozs7OztVQ2hDRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ1A7OztBQUcxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsbUJBQW1CLEVBQUU7QUFDckUsbURBQW1ELG1CQUFtQixFQUFFO0FBQ3hFOzs7QUFHQSwwREFBZTtBQUNmLHdEQUFVO0FBQ1YiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBzZXRUZXh0Q29udGVudHMgfSBmcm9tICcuL2RvbUhhbmRsZXInO1xuXG5mdW5jdGlvbiBjb250YWN0SW5mbygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHNldFRleHRDb250ZW50cyhbaGVhZGVyLCBhZGRyZXNzLCBwaG9uZV0sXG4gICAgWydDb250YWN0IFVzJyxcbiAgICAgICdEdW1teSBBZGRyZXNzIExvcmVtIElwc3VtIFNpdCBBbWV0IDI5MjkyOTI5IER1bW15IFBsYWNlJyxcbiAgICAgICdUZWxlcGhvbmU6IDEtODAwLTEyMy00NTY3IEVtYWlsOiBpbmZvQGV4YW1wbGUuY29tJyxcbiAgICBdKTtcblxuICBhcHBlbmRDaGlsZHJlbihjb250YWluZXIsIFtoZWFkZXIsIGFkZHJlc3MsIHBob25lXSk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5jb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGFjdCA9IGNvbnRhY3RJbmZvKCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJiZWQtY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtdGFiJyk7XG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUNvbnRhY3QgYXMgZGVmYXVsdCxcbn07XG4iLCJjb25zdCBhYm91dFRleHQgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cbiAgICAgICAgICAgICAgICAgICAgICBEb25lYyBmaW5pYnVzIHNvbGxpY2l0dWRpbiBlcm9zIHF1aXMgcG9ydHRpdG9yLiBDcmFzIGFsaXF1YW0gbmliaCBcbiAgICAgICAgICAgICAgICAgICAgICBhIGZhdWNpYnVzIGNvbmRpbWVudHVtLiBEb25lYyBsdWN0dXMgdmVuZW5hdGlzIGFsaXF1ZXQuIFxuICAgICAgICAgICAgICAgICAgICAgIEZ1c2NlIGFsaXF1YW0gYWxpcXVldCBuaWJoIHV0IHVsbGFtY29ycGVyLiBJbnRlZ2VyIHJob25jdXMganVzdG8gbWV0dXMsIFxuICAgICAgICAgICAgICAgICAgICAgIGluIHZlaGljdWxhIGxvcmVtIHZvbHV0cGF0IGFjLiBJbnRlZ2VyIGp1c3RvIHF1YW0sIGxhY2luaWEgc2VtcGVyIGZlbGlzIHZlbCwgXG4gICAgICAgICAgICAgICAgICAgICAgZmluaWJ1cyBjb252YWxsaXMgbGVjdHVzLiBRdWlzcXVlIHByZXRpdW0gcG9ydGEgY29uc2VjdGV0dXIuIER1aXMgaWQgZXVpc21vZCBcbiAgICAgICAgICAgICAgICAgICAgICB0ZWxsdXMsIHZpdGFlIGFsaXF1YW0gZXJvcy4gTW9yYmkgdml0YWUgbmVxdWUgdml0YWUgZXggY3Vyc3VzIG1vbGVzdGllLiBcbiAgICAgICAgICAgICAgICAgICAgICBBbGlxdWFtIHZlaGljdWxhIGFyY3Ugc2VkIGlwc3VtIGludGVyZHVtLCBwcmV0aXVtIGN1cnN1cyBlcm9zIGZhY2lsaXNpcy4gXG4gICAgICAgICAgICAgICAgICAgICAgQ3VyYWJpdHVyIGV0IHZvbHV0cGF0IG5pc2wuIENyYXMgbm9uIGdyYXZpZGEgYXJjdS4gQWxpcXVhbSBldSBvZGlvIHByZXRpdW0sIFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlcXVhdCBkb2xvciBxdWlzLCBhY2N1bXNhbiBpcHN1bS4gTnVuYyB0cmlzdGlxdWUgZW5pbSBhIG5pc2wgZmV1Z2lhdCBsdWN0dXMuYDtcblxuXG5leHBvcnQge1xuICBhYm91dFRleHQgYXMgZGVmYXVsdCxcbn07XG4iLCJjb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnQsIGFycmF5T2ZDaGlsZHJlbikgPT4ge1xuICBhcnJheU9mQ2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldFRleHRDb250ZW50cyA9IChhcnJheU9mZWxlbWVudCwgYXJyYXlPZkNvbnRlbnQpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9mZWxlbWVudC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGFycmF5T2ZlbGVtZW50W2ldLnRleHRDb250ZW50ID0gYXJyYXlPZkNvbnRlbnRbaV07XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUFsbEJ5Q2xhc3MgPSAoY2xhc3NOYW1lKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG59O1xuXG5leHBvcnQge1xuICBhcHBlbmRDaGlsZHJlbixcbiAgcmVtb3ZlQWxsQnlDbGFzcyxcbiAgc2V0VGV4dENvbnRlbnRzLFxufTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBzZXRUZXh0Q29udGVudHMgfSBmcm9tICcuL2RvbUhhbmRsZXInO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdCgpIHtcbiAgY29uc3QgcGFyZW50bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3VibGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBzdWJpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHN1Yml0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3ViaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBzdWJpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3VibGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBzdWIyaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBzdWIyaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBzdWIyaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBzdWIyaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGxpMS50ZXh0Q29udGVudCA9ICdBbWVyY2lhbic7XG4gIGxpMi50ZXh0Q29udGVudCA9ICdJbmRpYW4nO1xuICBzZXRUZXh0Q29udGVudHMoW3N1Yml0ZW0xLCBzdWJpdGVtMiwgc3ViaXRlbTMsIHN1Yml0ZW00XSwgWydQaXp6YScsICdCdXJnZXInLCAnU2FuZHdpY2gnLCAnRnJpZWQgQ2hpY2VuJ10pO1xuICBzZXRUZXh0Q29udGVudHMoW3N1YjJpdGVtMSwgc3ViMml0ZW0yLCBzdWIyaXRlbTMsIHN1YjJpdGVtNF0sIFsnQmlyeWFuaScsICdHdWxhYiBKYW11bicsICdQYW5lZXIgTWFraG5pJywgJ0Rvc2EnXSk7XG5cbiAgW2xpMSwgbGkyXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWItbGlzdC1oZWFkJyk7IH0pO1xuICBbc3VibGlzdDEsIHN1Ymxpc3QyXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWItbGlzdCcpOyB9KTtcblxuICBbc3ViMml0ZW0xLFxuICAgIHN1YjJpdGVtMixcbiAgICBzdWIyaXRlbTMsXG4gICAgc3ViMml0ZW00LFxuICAgIHN1Yml0ZW0xLFxuICAgIHN1Yml0ZW0yLFxuICAgIHN1Yml0ZW0zLFxuICAgIHN1Yml0ZW00XS5mb3JFYWNoKChlbGVtZW50KSA9PiB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWItbGlzdC1pdGVtJyk7IH0pO1xuXG4gIHBhcmVudGxpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb29kLW1lbnUnKTtcblxuXG4gIGFwcGVuZENoaWxkcmVuKHN1Ymxpc3QxLCBbc3ViaXRlbTEsIHN1Yml0ZW0yLCBzdWJpdGVtMywgc3ViaXRlbTRdKTtcbiAgYXBwZW5kQ2hpbGRyZW4oc3VibGlzdDIsIFtzdWIyaXRlbTEsIHN1YjJpdGVtMiwgc3ViMml0ZW0zLCBzdWIyaXRlbTRdKTtcbiAgbGkxLmFwcGVuZENoaWxkKHN1Ymxpc3QxKTtcbiAgbGkyLmFwcGVuZENoaWxkKHN1Ymxpc3QyKTtcbiAgYXBwZW5kQ2hpbGRyZW4ocGFyZW50bGlzdCwgW2xpMSwgbGkyXSk7XG5cblxuICBsaTEuYXBwZW5kQ2hpbGQoc3VibGlzdDEpO1xuICBsaTIuYXBwZW5kQ2hpbGQoc3VibGlzdDIpO1xuXG4gIHJldHVybiBwYXJlbnRsaXN0O1xufVxuXG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsaXN0ID0gY3JlYXRlTWVudUxpc3QoKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJiZWQtY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtdGFiJyk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU1lbnUgYXMgZGVmYXVsdCxcbn07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4vZG9tSGFuZGxlcic7XG5pbXBvcnQgYWJvdXRUZXh0IGZyb20gJy4vY29udGVudCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGhvbWUuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICBhYm91dC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI2Fib3V0Jyk7XG5cblxuICBhcHBlbmRDaGlsZHJlbih1bCwgW2hvbWUsIGFib3V0XSk7XG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVIZXJvKCkge1xuICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBoZXJvSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gIGhlcm9IZWFkbGluZS50ZXh0Q29udGVudCA9ICdUaGUgUmVzdGF1cmFudCc7XG4gIGhlcm9Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZXJvLWNvbnRhaW5lcicpO1xuXG4gIGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0hlYWRsaW5lKTtcbiAgcmV0dXJuIGhlcm9Db250YWluZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcbiAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gIGFib3V0Q29udGVudC50ZXh0Q29udGVudCA9IGFib3V0VGV4dDtcbiAgYWJvdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhYm91dC1zZWN0aW9uJyk7XG5cbiAgYXBwZW5kQ2hpbGRyZW4oYWJvdXRDb250YWluZXIsIFthYm91dFRpdGxlLCBhYm91dENvbnRlbnRdKTtcblxuICByZXR1cm4gYWJvdXRDb250YWluZXI7XG59XG5cblxuY29uc3QgcGFnZUxvYWRDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgaGVybyA9IGNyZWF0ZUhlcm8oKTtcbiAgY29uc3QgYWJvdXQgPSBjcmVhdGVBYm91dCgpO1xuICBhcHBlbmRDaGlsZHJlbihwYXJlbnQsIFtoZWFkZXIsIGhlcm8sIGFib3V0XSk7XG59O1xuXG5cbmV4cG9ydCB7XG4gIHBhZ2VMb2FkQ29udGVudCBhcyBkZWZhdWx0LFxufTtcbiIsImltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuL2RvbUhhbmRsZXInO1xuXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCB0YWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgdGFiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG1lbnUgPSBjcmVhdGVNZW51KCk7XG4gIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVDb250YWN0KCk7XG5cbiAgdGFiMS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgdGFiMi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YWItY29udGFpbmVyJyk7XG4gIHRhYkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RhYnMnKTtcbiAgdGFiMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVUYWInKTtcbiAgdGFiMS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgJ21lbnUtdGFiJyk7XG4gIHRhYjEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcbiAgdGFiMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RUYWInKTtcbiAgdGFiMi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgJ2NvbnRhY3QtdGFiJyk7XG5cbiAgYXBwZW5kQ2hpbGRyZW4odGFiQ29udGFpbmVyLCBbdGFiMSwgdGFiMl0pO1xuICBhcHBlbmRDaGlsZHJlbihjb250YWluZXIsIFt0YWJDb250YWluZXIsIG1lbnUsIGNvbnRhY3RdKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVRhYnMgYXMgZGVmYXVsdCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWRDb250ZW50IGZyb20gJy4vbW9kdWxlcy9wYWdlTG9hZCc7XG5pbXBvcnQgY3JlYXRlVGFicyBmcm9tICcuL21vZHVsZXMvdGFiYmVkJztcblxuXG5mdW5jdGlvbiBzd2l0Y2hUYWJzKGV2ZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiYmVkLWNvbnRhaW5lcicpO1xuICBlbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGNvbnN0IHRhYkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XG4gIHRhYkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcblxuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xhc3NOYW1lKTtcbiAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGJpbmRUYWJFdmVudHMoKSB7XG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRhYicpO1xuICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RUYWInKTtcblxuICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IHN3aXRjaFRhYnMoZXZlbnQpOyB9KTtcbiAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4geyBzd2l0Y2hUYWJzKGV2ZW50KTsgfSk7XG59XG5cblxucGFnZUxvYWRDb250ZW50KCk7XG5jcmVhdGVUYWJzKCk7XG5iaW5kVGFiRXZlbnRzKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
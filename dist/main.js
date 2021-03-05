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
  const parent = document.getElementById('content');
  const container = document.createElement('div');
  const contact = contactInfo();

  container.appendChild(contact);

  container.classList.add('tabbed-container');
  container.setAttribute('id', 'contact-tab');
  container.style.display = 'none';
  parent.appendChild(container);
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
  const parent = document.getElementById('content');
  const container = document.createElement('div');
  const list = createMenuList();
  container.appendChild(list);

  container.classList.add('tabbed-container');
  container.setAttribute('id', 'menu-tab');
  container.style.display = 'none';

  parent.appendChild(container);
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
  const container = document.createElement('div');
  const hero = createHero();
  const about = createAbout();
  container.classList.add('tabbed-container');
  container.setAttribute('id', 'home-tab');
  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(container, [hero, about]);
  parent.appendChild(container);
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
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ "./src/modules/domHandler.js");


const createTabs = () => {
  const parent = document.getElementById('content');
  const container = document.createElement('div');

  const tabContainer = document.createElement('ul');
  const tab1 = document.createElement('li');
  const tab2 = document.createElement('li');
  const tab3 = document.createElement('li');

  tab1.textContent = 'Home';
  tab2.textContent = 'Menu';
  tab3.textContent = 'Contact';

  container.setAttribute('class', 'tab-container');
  tabContainer.setAttribute('class', 'tabs');
  tab1.setAttribute('id', 'homeTab');
  tab1.setAttribute('data-attribute', 'home-tab');
  tab1.setAttribute('class', 'active');
  tab2.setAttribute('id', 'menuTab');
  tab2.setAttribute('data-attribute', 'menu-tab');
  tab3.setAttribute('id', 'contactTab');
  tab3.setAttribute('data-attribute', 'contact-tab');

  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tabContainer, [tab1, tab2, tab3]);
  (0,_domHandler__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(container, [tabContainer]);
  parent.appendChild(container);
};




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
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");





const switchTabs = (event) => {
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
};

const bindTabEvents = () => {
  const homeTab = document.getElementById('homeTab');
  const menuTab = document.getElementById('menuTab');
  const contactTab = document.getElementById('contactTab');

  [homeTab, menuTab, contactTab].forEach((tab) => {
    tab.addEventListener('click', (event) => { switchTabs(event); });
  });
};

(0,_modules_tabbed__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__.default)();
bindTabEvents();
(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3RhYmJlZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw0REFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLRTs7Ozs7Ozs7Ozs7Ozs7O0FDakNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBTUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjZEOztBQUUvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNERBQWU7QUFDakIsRUFBRSw0REFBZTs7QUFFakIsbUNBQW1DLGdEQUFnRCxFQUFFO0FBQ3JGLDZDQUE2QywyQ0FBMkMsRUFBRTs7QUFFMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0RBQWdELEVBQUU7O0FBRXRGOzs7QUFHQSxFQUFFLDJEQUFjO0FBQ2hCLEVBQUUsMkRBQWM7QUFDaEI7QUFDQTtBQUNBLEVBQUUsMkRBQWM7OztBQUdoQjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUtFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFNEM7QUFDWjs7O0FBR2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDZDQUFTO0FBQ3RDOztBQUVBLEVBQUUsMkRBQWM7O0FBRWhCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBYztBQUNoQjtBQUNBOzs7QUFLRTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDNEM7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsMkRBQWM7QUFDaEIsRUFBRSwyREFBYztBQUNoQjtBQUNBOztBQUlFOzs7Ozs7O1VDaENGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNQO0FBQ0Y7QUFDTTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxtQkFBbUIsRUFBRTtBQUNuRSxHQUFHO0FBQ0g7O0FBRUEsd0RBQVU7QUFDViwwREFBZTtBQUNmO0FBQ0Esc0RBQVU7QUFDVix5REFBYSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIHNldFRleHRDb250ZW50cyB9IGZyb20gJy4vZG9tSGFuZGxlcic7XG5cbmZ1bmN0aW9uIGNvbnRhY3RJbmZvKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgc2V0VGV4dENvbnRlbnRzKFtoZWFkZXIsIGFkZHJlc3MsIHBob25lXSxcbiAgICBbJ0NvbnRhY3QgVXMnLFxuICAgICAgJ0R1bW15IEFkZHJlc3MgTG9yZW0gSXBzdW0gU2l0IEFtZXQgMjkyOTI5MjkgRHVtbXkgUGxhY2UnLFxuICAgICAgJ1RlbGVwaG9uZTogMS04MDAtMTIzLTQ1NjcgRW1haWw6IGluZm9AZXhhbXBsZS5jb20nLFxuICAgIF0pO1xuXG4gIGFwcGVuZENoaWxkcmVuKGNvbnRhaW5lciwgW2hlYWRlciwgYWRkcmVzcywgcGhvbmVdKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmNvbnN0IGNyZWF0ZUNvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250YWN0ID0gY29udGFjdEluZm8oKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYmJlZC1jb250YWluZXInKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC10YWInKTtcbiAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuXG5leHBvcnQge1xuICBjcmVhdGVDb250YWN0IGFzIGRlZmF1bHQsXG59O1xuIiwiY29uc3QgYWJvdXRUZXh0ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXG4gICAgICAgICAgICAgICAgICAgICAgRG9uZWMgZmluaWJ1cyBzb2xsaWNpdHVkaW4gZXJvcyBxdWlzIHBvcnR0aXRvci4gQ3JhcyBhbGlxdWFtIG5pYmggXG4gICAgICAgICAgICAgICAgICAgICAgYSBmYXVjaWJ1cyBjb25kaW1lbnR1bS4gRG9uZWMgbHVjdHVzIHZlbmVuYXRpcyBhbGlxdWV0LiBcbiAgICAgICAgICAgICAgICAgICAgICBGdXNjZSBhbGlxdWFtIGFsaXF1ZXQgbmliaCB1dCB1bGxhbWNvcnBlci4gSW50ZWdlciByaG9uY3VzIGp1c3RvIG1ldHVzLCBcbiAgICAgICAgICAgICAgICAgICAgICBpbiB2ZWhpY3VsYSBsb3JlbSB2b2x1dHBhdCBhYy4gSW50ZWdlciBqdXN0byBxdWFtLCBsYWNpbmlhIHNlbXBlciBmZWxpcyB2ZWwsIFxuICAgICAgICAgICAgICAgICAgICAgIGZpbmlidXMgY29udmFsbGlzIGxlY3R1cy4gUXVpc3F1ZSBwcmV0aXVtIHBvcnRhIGNvbnNlY3RldHVyLiBEdWlzIGlkIGV1aXNtb2QgXG4gICAgICAgICAgICAgICAgICAgICAgdGVsbHVzLCB2aXRhZSBhbGlxdWFtIGVyb3MuIE1vcmJpIHZpdGFlIG5lcXVlIHZpdGFlIGV4IGN1cnN1cyBtb2xlc3RpZS4gXG4gICAgICAgICAgICAgICAgICAgICAgQWxpcXVhbSB2ZWhpY3VsYSBhcmN1IHNlZCBpcHN1bSBpbnRlcmR1bSwgcHJldGl1bSBjdXJzdXMgZXJvcyBmYWNpbGlzaXMuIFxuICAgICAgICAgICAgICAgICAgICAgIEN1cmFiaXR1ciBldCB2b2x1dHBhdCBuaXNsLiBDcmFzIG5vbiBncmF2aWRhIGFyY3UuIEFsaXF1YW0gZXUgb2RpbyBwcmV0aXVtLCBcbiAgICAgICAgICAgICAgICAgICAgICBjb25zZXF1YXQgZG9sb3IgcXVpcywgYWNjdW1zYW4gaXBzdW0uIE51bmMgdHJpc3RpcXVlIGVuaW0gYSBuaXNsIGZldWdpYXQgbHVjdHVzLmA7XG5cblxuZXhwb3J0IHtcbiAgYWJvdXRUZXh0IGFzIGRlZmF1bHQsXG59O1xuIiwiY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50LCBhcnJheU9mQ2hpbGRyZW4pID0+IHtcbiAgYXJyYXlPZkNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRUZXh0Q29udGVudHMgPSAoYXJyYXlPZmVsZW1lbnQsIGFycmF5T2ZDb250ZW50KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZmVsZW1lbnQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnJheU9mZWxlbWVudFtpXS50ZXh0Q29udGVudCA9IGFycmF5T2ZDb250ZW50W2ldO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVBbGxCeUNsYXNzID0gKGNsYXNzTmFtZSkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSkuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xufTtcblxuZXhwb3J0IHtcbiAgYXBwZW5kQ2hpbGRyZW4sXG4gIHJlbW92ZUFsbEJ5Q2xhc3MsXG4gIHNldFRleHRDb250ZW50cyxcbn07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiwgc2V0VGV4dENvbnRlbnRzIH0gZnJvbSAnLi9kb21IYW5kbGVyJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudUxpc3QoKSB7XG4gIGNvbnN0IHBhcmVudGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHN1Ymxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3Qgc3ViaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBzdWJpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHN1Yml0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3ViaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHN1Ymxpc3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3Qgc3ViMml0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3ViMml0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3ViMml0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3ViMml0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBsaTEudGV4dENvbnRlbnQgPSAnQW1lcmNpYW4nO1xuICBsaTIudGV4dENvbnRlbnQgPSAnSW5kaWFuJztcbiAgc2V0VGV4dENvbnRlbnRzKFtzdWJpdGVtMSwgc3ViaXRlbTIsIHN1Yml0ZW0zLCBzdWJpdGVtNF0sIFsnUGl6emEnLCAnQnVyZ2VyJywgJ1NhbmR3aWNoJywgJ0ZyaWVkIENoaWNlbiddKTtcbiAgc2V0VGV4dENvbnRlbnRzKFtzdWIyaXRlbTEsIHN1YjJpdGVtMiwgc3ViMml0ZW0zLCBzdWIyaXRlbTRdLCBbJ0JpcnlhbmknLCAnR3VsYWIgSmFtdW4nLCAnUGFuZWVyIE1ha2huaScsICdEb3NhJ10pO1xuXG4gIFtsaTEsIGxpMl0uZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3ViLWxpc3QtaGVhZCcpOyB9KTtcbiAgW3N1Ymxpc3QxLCBzdWJsaXN0Ml0uZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3ViLWxpc3QnKTsgfSk7XG5cbiAgW3N1YjJpdGVtMSxcbiAgICBzdWIyaXRlbTIsXG4gICAgc3ViMml0ZW0zLFxuICAgIHN1YjJpdGVtNCxcbiAgICBzdWJpdGVtMSxcbiAgICBzdWJpdGVtMixcbiAgICBzdWJpdGVtMyxcbiAgICBzdWJpdGVtNF0uZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3ViLWxpc3QtaXRlbScpOyB9KTtcblxuICBwYXJlbnRsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9vZC1tZW51Jyk7XG5cblxuICBhcHBlbmRDaGlsZHJlbihzdWJsaXN0MSwgW3N1Yml0ZW0xLCBzdWJpdGVtMiwgc3ViaXRlbTMsIHN1Yml0ZW00XSk7XG4gIGFwcGVuZENoaWxkcmVuKHN1Ymxpc3QyLCBbc3ViMml0ZW0xLCBzdWIyaXRlbTIsIHN1YjJpdGVtMywgc3ViMml0ZW00XSk7XG4gIGxpMS5hcHBlbmRDaGlsZChzdWJsaXN0MSk7XG4gIGxpMi5hcHBlbmRDaGlsZChzdWJsaXN0Mik7XG4gIGFwcGVuZENoaWxkcmVuKHBhcmVudGxpc3QsIFtsaTEsIGxpMl0pO1xuXG5cbiAgbGkxLmFwcGVuZENoaWxkKHN1Ymxpc3QxKTtcbiAgbGkyLmFwcGVuZENoaWxkKHN1Ymxpc3QyKTtcblxuICByZXR1cm4gcGFyZW50bGlzdDtcbn1cblxuXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGlzdCA9IGNyZWF0ZU1lbnVMaXN0KCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiYmVkLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXRhYicpO1xuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cblxuZXhwb3J0IHtcbiAgY3JlYXRlTWVudSBhcyBkZWZhdWx0LFxufTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi9kb21IYW5kbGVyJztcbmltcG9ydCBhYm91dFRleHQgZnJvbSAnLi9jb250ZW50JztcblxuXG5mdW5jdGlvbiBjcmVhdGVIZXJvKCkge1xuICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBoZXJvSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gIGhlcm9IZWFkbGluZS50ZXh0Q29udGVudCA9ICdUaGUgUmVzdGF1cmFudCc7XG4gIGhlcm9Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZXJvLWNvbnRhaW5lcicpO1xuXG4gIGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0hlYWRsaW5lKTtcbiAgcmV0dXJuIGhlcm9Db250YWluZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcbiAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gIGFib3V0Q29udGVudC50ZXh0Q29udGVudCA9IGFib3V0VGV4dDtcbiAgYWJvdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhYm91dC1zZWN0aW9uJyk7XG5cbiAgYXBwZW5kQ2hpbGRyZW4oYWJvdXRDb250YWluZXIsIFthYm91dFRpdGxlLCBhYm91dENvbnRlbnRdKTtcblxuICByZXR1cm4gYWJvdXRDb250YWluZXI7XG59XG5cblxuY29uc3QgcGFnZUxvYWRDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVybyA9IGNyZWF0ZUhlcm8oKTtcbiAgY29uc3QgYWJvdXQgPSBjcmVhdGVBYm91dCgpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiYmVkLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXRhYicpO1xuICBhcHBlbmRDaGlsZHJlbihjb250YWluZXIsIFtoZXJvLCBhYm91dF0pO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cblxuZXhwb3J0IHtcbiAgcGFnZUxvYWRDb250ZW50IGFzIGRlZmF1bHQsXG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuL2RvbUhhbmRsZXInO1xuXG5jb25zdCBjcmVhdGVUYWJzID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCB0YWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgdGFiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHRhYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIHRhYjEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIHRhYjIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIHRhYjMudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFiLWNvbnRhaW5lcicpO1xuICB0YWJDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YWJzJyk7XG4gIHRhYjEuc2V0QXR0cmlidXRlKCdpZCcsICdob21lVGFiJyk7XG4gIHRhYjEuc2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScsICdob21lLXRhYicpO1xuICB0YWIxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XG4gIHRhYjIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51VGFiJyk7XG4gIHRhYjIuc2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScsICdtZW51LXRhYicpO1xuICB0YWIzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdFRhYicpO1xuICB0YWIzLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCAnY29udGFjdC10YWInKTtcblxuICBhcHBlbmRDaGlsZHJlbih0YWJDb250YWluZXIsIFt0YWIxLCB0YWIyLCB0YWIzXSk7XG4gIGFwcGVuZENoaWxkcmVuKGNvbnRhaW5lciwgW3RhYkNvbnRhaW5lcl0pO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVRhYnMgYXMgZGVmYXVsdCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWRDb250ZW50IGZyb20gJy4vbW9kdWxlcy9wYWdlTG9hZCc7XG5pbXBvcnQgY3JlYXRlVGFicyBmcm9tICcuL21vZHVsZXMvdGFiYmVkJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbW9kdWxlcy9tZW51JztcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gJy4vbW9kdWxlcy9jb250YWN0JztcblxuY29uc3Qgc3dpdGNoVGFicyA9IChldmVudCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmJlZC1jb250YWluZXInKTtcbiAgZWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICBjb25zdCB0YWJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xuICB0YWJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG5cbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBjb25zdCBjbGFzc05hbWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsYXNzTmFtZSk7XG4gIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufTtcblxuY29uc3QgYmluZFRhYkV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lVGFiJyk7XG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRhYicpO1xuICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RUYWInKTtcblxuICBbaG9tZVRhYiwgbWVudVRhYiwgY29udGFjdFRhYl0uZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IHN3aXRjaFRhYnMoZXZlbnQpOyB9KTtcbiAgfSk7XG59O1xuXG5jcmVhdGVUYWJzKCk7XG5wYWdlTG9hZENvbnRlbnQoKTtcbmJpbmRUYWJFdmVudHMoKTtcbmNyZWF0ZU1lbnUoKTtcbmNyZWF0ZUNvbnRhY3QoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
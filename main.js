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

  parent.appendChild(container)
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domHandler */ "./src/modules/domHandler.js");




const createTabs = () => {
  const parent = document.getElementById('content');
  const container = document.createElement('div');

  const tabContainer = document.createElement('ul');
  const tab1 = document.createElement('li');
  const tab2 = document.createElement('li');
  const tab3 = document.createElement('li');

  tab1.textContent = 'Home';
  tab2.textContent = 'Menu';
  tab3.textContent = 'Contact'

  container.setAttribute('class', 'tab-container');
  tabContainer.setAttribute('class', 'tabs');
  tab1.setAttribute('id', 'homeTab');
  tab1.setAttribute('data-attribute', 'home-tab');
  tab1.setAttribute('class', 'active');
  tab2.setAttribute('id', 'menuTab');
  tab2.setAttribute('data-attribute', 'menu-tab');
  tab3.setAttribute('id', 'contactTab');
  tab3.setAttribute('data-attribute', 'contact-tab')

  ;(0,_domHandler__WEBPACK_IMPORTED_MODULE_2__.appendChildren)(tabContainer, [tab1, tab2, tab3]);
  (0,_domHandler__WEBPACK_IMPORTED_MODULE_2__.appendChildren)(container, [tabContainer]);
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
  const homeTab = document.getElementById('homeTab')
  const menuTab = document.getElementById('menuTab');
  const contactTab = document.getElementById('contactTab');

  [homeTab, menuTab, contactTab].forEach((tab) => {
    tab.addEventListener('click', (event) => {switchTabs(event)});
  })
};

(0,_modules_tabbed__WEBPACK_IMPORTED_MODULE_1__.default)()
;(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__.default)();
bindTabEvents();
(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3RhYmJlZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw0REFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBS0U7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQU1FOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEI2RDs7QUFFL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDREQUFlO0FBQ2pCLEVBQUUsNERBQWU7O0FBRWpCLG1DQUFtQyxnREFBZ0QsRUFBRTtBQUNyRiw2Q0FBNkMsMkNBQTJDLEVBQUU7O0FBRTFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdEQUFnRCxFQUFFOztBQUV0Rjs7O0FBR0EsRUFBRSwyREFBYztBQUNoQixFQUFFLDJEQUFjO0FBQ2hCO0FBQ0E7QUFDQSxFQUFFLDJEQUFjOzs7QUFHaEI7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFLRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRTRDO0FBQ1o7OztBQUdsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qiw2Q0FBUztBQUN0Qzs7QUFFQSxFQUFFLDJEQUFjOztBQUVoQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQWM7QUFDaEI7QUFDQTs7O0FBS0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDOEI7QUFDTTtBQUNROztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDREQUFjO0FBQ2hCLEVBQUUsMkRBQWM7QUFDaEI7QUFDQTs7QUFJRTs7Ozs7OztVQ2xDRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDUDtBQUNGO0FBQ007O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFLEdBQUc7QUFDSDs7QUFFQSx3REFBVTtBQUNWLDJEQUFlO0FBQ2Y7QUFDQSxzREFBVTtBQUNWLHlEQUFhIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiwgc2V0VGV4dENvbnRlbnRzIH0gZnJvbSAnLi9kb21IYW5kbGVyJztcblxuZnVuY3Rpb24gY29udGFjdEluZm8oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBzZXRUZXh0Q29udGVudHMoW2hlYWRlciwgYWRkcmVzcywgcGhvbmVdLFxuICAgIFsnQ29udGFjdCBVcycsXG4gICAgICAnRHVtbXkgQWRkcmVzcyBMb3JlbSBJcHN1bSBTaXQgQW1ldCAyOTI5MjkyOSBEdW1teSBQbGFjZScsXG4gICAgICAnVGVsZXBob25lOiAxLTgwMC0xMjMtNDU2NyBFbWFpbDogaW5mb0BleGFtcGxlLmNvbScsXG4gICAgXSk7XG5cbiAgYXBwZW5kQ2hpbGRyZW4oY29udGFpbmVyLCBbaGVhZGVyLCBhZGRyZXNzLCBwaG9uZV0pO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRhY3QgPSBjb250YWN0SW5mbygpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiYmVkLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LXRhYicpO1xuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbn07XG5cblxuZXhwb3J0IHtcbiAgY3JlYXRlQ29udGFjdCBhcyBkZWZhdWx0LFxufTtcbiIsImNvbnN0IGFib3V0VGV4dCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxuICAgICAgICAgICAgICAgICAgICAgIERvbmVjIGZpbmlidXMgc29sbGljaXR1ZGluIGVyb3MgcXVpcyBwb3J0dGl0b3IuIENyYXMgYWxpcXVhbSBuaWJoIFxuICAgICAgICAgICAgICAgICAgICAgIGEgZmF1Y2lidXMgY29uZGltZW50dW0uIERvbmVjIGx1Y3R1cyB2ZW5lbmF0aXMgYWxpcXVldC4gXG4gICAgICAgICAgICAgICAgICAgICAgRnVzY2UgYWxpcXVhbSBhbGlxdWV0IG5pYmggdXQgdWxsYW1jb3JwZXIuIEludGVnZXIgcmhvbmN1cyBqdXN0byBtZXR1cywgXG4gICAgICAgICAgICAgICAgICAgICAgaW4gdmVoaWN1bGEgbG9yZW0gdm9sdXRwYXQgYWMuIEludGVnZXIganVzdG8gcXVhbSwgbGFjaW5pYSBzZW1wZXIgZmVsaXMgdmVsLCBcbiAgICAgICAgICAgICAgICAgICAgICBmaW5pYnVzIGNvbnZhbGxpcyBsZWN0dXMuIFF1aXNxdWUgcHJldGl1bSBwb3J0YSBjb25zZWN0ZXR1ci4gRHVpcyBpZCBldWlzbW9kIFxuICAgICAgICAgICAgICAgICAgICAgIHRlbGx1cywgdml0YWUgYWxpcXVhbSBlcm9zLiBNb3JiaSB2aXRhZSBuZXF1ZSB2aXRhZSBleCBjdXJzdXMgbW9sZXN0aWUuIFxuICAgICAgICAgICAgICAgICAgICAgIEFsaXF1YW0gdmVoaWN1bGEgYXJjdSBzZWQgaXBzdW0gaW50ZXJkdW0sIHByZXRpdW0gY3Vyc3VzIGVyb3MgZmFjaWxpc2lzLiBcbiAgICAgICAgICAgICAgICAgICAgICBDdXJhYml0dXIgZXQgdm9sdXRwYXQgbmlzbC4gQ3JhcyBub24gZ3JhdmlkYSBhcmN1LiBBbGlxdWFtIGV1IG9kaW8gcHJldGl1bSwgXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VxdWF0IGRvbG9yIHF1aXMsIGFjY3Vtc2FuIGlwc3VtLiBOdW5jIHRyaXN0aXF1ZSBlbmltIGEgbmlzbCBmZXVnaWF0IGx1Y3R1cy5gO1xuXG5cbmV4cG9ydCB7XG4gIGFib3V0VGV4dCBhcyBkZWZhdWx0XG59O1xuIiwiY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50LCBhcnJheU9mQ2hpbGRyZW4pID0+IHtcbiAgYXJyYXlPZkNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRUZXh0Q29udGVudHMgPSAoYXJyYXlPZmVsZW1lbnQsIGFycmF5T2ZDb250ZW50KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZmVsZW1lbnQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnJheU9mZWxlbWVudFtpXS50ZXh0Q29udGVudCA9IGFycmF5T2ZDb250ZW50W2ldO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVBbGxCeUNsYXNzID0gKGNsYXNzTmFtZSkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSkuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xufTtcblxuZXhwb3J0IHtcbiAgYXBwZW5kQ2hpbGRyZW4sXG4gIHJlbW92ZUFsbEJ5Q2xhc3MsXG4gIHNldFRleHRDb250ZW50cyxcbn07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiwgc2V0VGV4dENvbnRlbnRzIH0gZnJvbSAnLi9kb21IYW5kbGVyJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudUxpc3QoKSB7XG4gIGNvbnN0IHBhcmVudGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHN1Ymxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3Qgc3ViaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBzdWJpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHN1Yml0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3ViaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHN1Ymxpc3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3Qgc3ViMml0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3ViMml0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3ViMml0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3ViMml0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBsaTEudGV4dENvbnRlbnQgPSAnQW1lcmNpYW4nO1xuICBsaTIudGV4dENvbnRlbnQgPSAnSW5kaWFuJztcbiAgc2V0VGV4dENvbnRlbnRzKFtzdWJpdGVtMSwgc3ViaXRlbTIsIHN1Yml0ZW0zLCBzdWJpdGVtNF0sIFsnUGl6emEnLCAnQnVyZ2VyJywgJ1NhbmR3aWNoJywgJ0ZyaWVkIENoaWNlbiddKTtcbiAgc2V0VGV4dENvbnRlbnRzKFtzdWIyaXRlbTEsIHN1YjJpdGVtMiwgc3ViMml0ZW0zLCBzdWIyaXRlbTRdLCBbJ0JpcnlhbmknLCAnR3VsYWIgSmFtdW4nLCAnUGFuZWVyIE1ha2huaScsICdEb3NhJ10pO1xuXG4gIFtsaTEsIGxpMl0uZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3ViLWxpc3QtaGVhZCcpOyB9KTtcbiAgW3N1Ymxpc3QxLCBzdWJsaXN0Ml0uZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3ViLWxpc3QnKTsgfSk7XG5cbiAgW3N1YjJpdGVtMSxcbiAgICBzdWIyaXRlbTIsXG4gICAgc3ViMml0ZW0zLFxuICAgIHN1YjJpdGVtNCxcbiAgICBzdWJpdGVtMSxcbiAgICBzdWJpdGVtMixcbiAgICBzdWJpdGVtMyxcbiAgICBzdWJpdGVtNF0uZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3ViLWxpc3QtaXRlbScpOyB9KTtcblxuICBwYXJlbnRsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9vZC1tZW51Jyk7XG5cblxuICBhcHBlbmRDaGlsZHJlbihzdWJsaXN0MSwgW3N1Yml0ZW0xLCBzdWJpdGVtMiwgc3ViaXRlbTMsIHN1Yml0ZW00XSk7XG4gIGFwcGVuZENoaWxkcmVuKHN1Ymxpc3QyLCBbc3ViMml0ZW0xLCBzdWIyaXRlbTIsIHN1YjJpdGVtMywgc3ViMml0ZW00XSk7XG4gIGxpMS5hcHBlbmRDaGlsZChzdWJsaXN0MSk7XG4gIGxpMi5hcHBlbmRDaGlsZChzdWJsaXN0Mik7XG4gIGFwcGVuZENoaWxkcmVuKHBhcmVudGxpc3QsIFtsaTEsIGxpMl0pO1xuXG5cbiAgbGkxLmFwcGVuZENoaWxkKHN1Ymxpc3QxKTtcbiAgbGkyLmFwcGVuZENoaWxkKHN1Ymxpc3QyKTtcblxuICByZXR1cm4gcGFyZW50bGlzdDtcbn1cblxuXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGlzdCA9IGNyZWF0ZU1lbnVMaXN0KCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiYmVkLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXRhYicpO1xuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxufTtcblxuXG5leHBvcnQge1xuICBjcmVhdGVNZW51IGFzIGRlZmF1bHQsXG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuL2RvbUhhbmRsZXInO1xuaW1wb3J0IGFib3V0VGV4dCBmcm9tICcuL2NvbnRlbnQnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlcm8oKSB7XG4gIGNvbnN0IGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGhlcm9IZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgaGVyb0hlYWRsaW5lLnRleHRDb250ZW50ID0gJ1RoZSBSZXN0YXVyYW50JztcbiAgaGVyb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlcm8tY29udGFpbmVyJyk7XG5cbiAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSGVhZGxpbmUpO1xuICByZXR1cm4gaGVyb0NvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcbiAgYWJvdXRDb250ZW50LnRleHRDb250ZW50ID0gYWJvdXRUZXh0O1xuICBhYm91dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Fib3V0LXNlY3Rpb24nKTtcblxuICBhcHBlbmRDaGlsZHJlbihhYm91dENvbnRhaW5lciwgW2Fib3V0VGl0bGUsIGFib3V0Q29udGVudF0pO1xuXG4gIHJldHVybiBhYm91dENvbnRhaW5lcjtcbn1cblxuXG5jb25zdCBwYWdlTG9hZENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZXJvID0gY3JlYXRlSGVybygpO1xuICBjb25zdCBhYm91dCA9IGNyZWF0ZUFib3V0KCk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJiZWQtY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtdGFiJyk7XG4gIGFwcGVuZENoaWxkcmVuKGNvbnRhaW5lciwgW2hlcm8sIGFib3V0XSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuXG5leHBvcnQge1xuICBwYWdlTG9hZENvbnRlbnQgYXMgZGVmYXVsdCxcbn07XG4iLCJpbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi9kb21IYW5kbGVyJztcblxuY29uc3QgY3JlYXRlVGFicyA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgdGFiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHRhYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCB0YWIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICB0YWIxLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICB0YWIyLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICB0YWIzLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXG5cbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFiLWNvbnRhaW5lcicpO1xuICB0YWJDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YWJzJyk7XG4gIHRhYjEuc2V0QXR0cmlidXRlKCdpZCcsICdob21lVGFiJyk7XG4gIHRhYjEuc2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScsICdob21lLXRhYicpO1xuICB0YWIxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XG4gIHRhYjIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51VGFiJyk7XG4gIHRhYjIuc2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScsICdtZW51LXRhYicpO1xuICB0YWIzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdFRhYicpO1xuICB0YWIzLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCAnY29udGFjdC10YWInKVxuXG4gIGFwcGVuZENoaWxkcmVuKHRhYkNvbnRhaW5lciwgW3RhYjEsIHRhYjIsIHRhYjNdKTtcbiAgYXBwZW5kQ2hpbGRyZW4oY29udGFpbmVyLCBbdGFiQ29udGFpbmVyXSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlVGFicyBhcyBkZWZhdWx0LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZENvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL3BhZ2VMb2FkJztcbmltcG9ydCBjcmVhdGVUYWJzIGZyb20gJy4vbW9kdWxlcy90YWJiZWQnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tb2R1bGVzL21lbnUnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnO1xuXG5jb25zdCBzd2l0Y2hUYWJzID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiYmVkLWNvbnRhaW5lcicpO1xuICBlbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGNvbnN0IHRhYkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XG4gIHRhYkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcblxuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xhc3NOYW1lKTtcbiAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG5jb25zdCBiaW5kVGFiRXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVUYWInKVxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUYWInKTtcbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0VGFiJyk7XG5cbiAgW2hvbWVUYWIsIG1lbnVUYWIsIGNvbnRhY3RUYWJdLmZvckVhY2goKHRhYikgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge3N3aXRjaFRhYnMoZXZlbnQpfSk7XG4gIH0pXG59O1xuXG5jcmVhdGVUYWJzKClcbnBhZ2VMb2FkQ29udGVudCgpO1xuYmluZFRhYkV2ZW50cygpO1xuY3JlYXRlTWVudSgpO1xuY3JlYXRlQ29udGFjdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
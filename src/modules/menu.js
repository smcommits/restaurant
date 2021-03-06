import { appendChildren, setTextContents } from './domHandler';

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
  setTextContents([subitem1, subitem2, subitem3, subitem4], ['Pizza', 'Burger', 'Sandwich', 'Fried Chicen']);
  setTextContents([sub2item1, sub2item2, sub2item3, sub2item4], ['Biryani', 'Gulab Jamun', 'Paneer Makhni', 'Dosa']);

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


  appendChildren(sublist1, [subitem1, subitem2, subitem3, subitem4]);
  appendChildren(sublist2, [sub2item1, sub2item2, sub2item3, sub2item4]);
  li1.appendChild(sublist1);
  li2.appendChild(sublist2);
  appendChildren(parentlist, [li1, li2]);


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


export {
  createMenu as default,
};

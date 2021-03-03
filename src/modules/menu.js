import {appendChildren, addAttributes, setTextContents} from './domHandler'

const createMenu = () => {
  let container = document.createElement('div');
  let list = createMenuList();
  container.appendChild(list)
  
  container.classList.add('tabbed-container');
  container.setAttribute('id', 'menu-tab')
  return container;
}


function createMenuList() {
  let parentlist = document.createElement('ul');
  
  let li1 = document.createElement('li');
  let sublist1 = document.createElement('ul');
  let subitem1 = document.createElement('li');
  let subitem2 = document.createElement('li');
  let subitem3 = document.createElement('li');
  let subitem4 = document.createElement('li');

  let li2 = document.createElement('li');
  let sublist2 = document.createElement('ul');
  let sub2item1 = document.createElement('li');
  let sub2item2 = document.createElement('li');
  let sub2item3 = document.createElement('li');
  let sub2item4 = document.createElement('li');

  li1.textContent = "Amercian";
  li2.textContent = "Indian";
  setTextContents([subitem1, subitem2, subitem3, subitem4], ["Pizza", "Burger", "Sandwich", "Fried Chicen"]);
  setTextContents([sub2item1, sub2item2, sub2item3, sub2item4], ["Biryani", "Gulab Jamun", "Paneer Makhni", "Dosa"]);

  [li1, li2].forEach((element) => {element.setAttribute("class", "sub-list-head")});
  [sublist1, sublist2].forEach((element) => {element.setAttribute("class", "sub-list")});

  [sub2item1, 
    sub2item2, 
    sub2item3, 
    sub2item4, 
    subitem1, 
    subitem2, 
    subitem3, 
    subitem4].forEach((element) => {element.setAttribute("class", "sub-list-item")});

  parentlist.setAttribute("class", "food-menu")



  appendChildren(sublist1, [subitem1, subitem2, subitem3, subitem4])
  appendChildren(sublist2, [sub2item1, sub2item2, sub2item3, sub2item4])
  li1.appendChild(sublist1);
  li2.appendChild(sublist2);
  appendChildren(parentlist, [li1, li2]);


  li1.appendChild(sublist1);
  li2.appendChild(sublist2);

  return parentlist;
}

export {
  createMenu as default
}




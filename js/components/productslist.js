
const div_gadgets = document.querySelectorAll(".gadget");
const Products_gadgets = []; 
 div_gadgets.forEach(e => { 
  Products_gadgets.push(e.getElementsByTagName('p')[0].textContent);
  return Products_gadgets;
})


const div_consolas = document.querySelectorAll(".consolas");
const Products_consolas = []; 
  div_consolas.forEach(e => { 
  Products_consolas.push(e.getElementsByTagName('p')[0].textContent);
  return Products_consolas;
})


const div_diverses = document.querySelectorAll(".diverses");
const Products_diverses = []; 
  div_diverses.forEach(e => { 
  Products_diverses.push(e.getElementsByTagName('p')[0].textContent);
  return Products_diverses;
})

export function loadproducts(){
const Products = Products_gadgets.concat(Products_consolas,Products_diverses);
return Products;
}

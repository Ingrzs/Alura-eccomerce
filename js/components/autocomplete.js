import { loadproducts } from "./productslist.js"

const divform = document.querySelector(".header__form");
const divlist = document.createElement("div");
divlist.className= "divlist";
divform.appendChild(divlist);

const Productos = loadproducts();


function ChangeItem(event) {
    let data = event.target.value;
    divlist.innerHTML = ``;
    console.log(data.length);
    if (data.length) {
      let autoCompleteValues = filter(data);
      autoCompleteValues.forEach(value => { AddItem(value);
      });
     }
  }
  
  function filter(value){
   const filtervalues = Productos.filter((v) => v.toLowerCase().includes(value.toLowerCase()))
   return filtervalues;
  }
  
  function AddItem(value) {
   divlist.innerHTML += `<li>${value}</li>`;
  }
  
  function selectItem(event) {
    if (event.target.tagName === 'LI') {
        input.value = target.textContent;
        divlist.innerHTML = ``;
     }
  }

  export  { ChangeItem }
  export  {selectItem}
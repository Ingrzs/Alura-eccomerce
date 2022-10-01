/*import { ProductosTotales } from "./components/Products.js";

import {ChangeItem,selectItem} from "./components/autocomplete.js"
import{FormularioNav, Openpage} from "./components/Formnav.js"*/
import { Gadgets,Consolas,Diversos } from "./components/Products.js";

const Items_gadgets = document.querySelector(".Items_gadgets");
const Items_consolas = document.querySelector(".Items_consolas");
const Items_diversos = document.querySelector(".Items_diversos")
Gadgets(Items_gadgets);
Consolas(Items_consolas);
Diversos(Items_diversos);


const input = document.querySelector(".search_input");
input.addEventListener("input",ChangeItem);

const elements_li = document.querySelector(".divlist");
elements_li.addEventListener("click",selectItem);


const button_search = document.querySelector(".button_search");
button_search.addEventListener("click",FormularioNav)




//this is a list with datalist and option test
/*const producto = Listaproductos.forEach(element => {
   const data_list = document.getElementById("datos").getElementsByTagName("option");
   const a = `<option value="${element}"></option>`
   const x = element
   data_list.innerHTML = a;
   console.log(data_list);
});

let test = Listaproductos.forEach(element =>{
    const element_datalist = document.querySelector("#datos");
    const element_option = document.createElement("option");
    element_option.value = element
    element_datalist.appendChild(element_option);
    ;
});*/


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

import {ChangeItem,selectItem} from "./components/autocomplete.js"

const input = document.querySelector(".search_input");
input.addEventListener("input",ChangeItem,selectItem);




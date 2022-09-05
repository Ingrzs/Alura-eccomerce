const div_gadgets = document.querySelectorAll(".gadget");
const div_consolas = document.querySelectorAll(".consolas");
const div_diverses = document.querySelectorAll(".diverses");

let productsgadgets =[]
let productsconsolas=[]
let productsdiverses =[]

function llenandoproductos(v,array){
  v.forEach(e => array.push(e.getElementsByTagName('p')[0].textContent))
  return array;
}


productsgadgets = llenandoproductos(div_gadgets,productsgadgets);
productsconsolas = llenandoproductos(div_consolas,productsconsolas);
productsdiverses =llenandoproductos(div_diverses,productsdiverses);

export const totalproducts = productsgadgets.concat(productsconsolas,productsdiverses)
console.log(totalproducts)


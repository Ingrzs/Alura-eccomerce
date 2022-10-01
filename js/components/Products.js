/*export const ProductosTotales = () => {
  const div_gadgets = document.querySelectorAll(".gadget");
  const div_consolas = document.querySelectorAll(".consolas");
  const div_diverses = document.querySelectorAll(".diverses");

  let ArrayGadgets = [];
  let ArrayConsolas = [];
  let ArrayDiversos = [];

  const SearchProducts = (v, array) => {
    v.forEach((e) => array.push(e.getElementsByTagName("p")[0].textContent));
    return array;
  };

  SearchProducts(div_gadgets, ArrayGadgets);
  SearchProducts(div_consolas, ArrayConsolas);
  SearchProducts(div_diverses, ArrayDiversos);

  const Totalproducts = ArrayGadgets.concat(ArrayConsolas, ArrayDiversos);
  return Totalproducts;
};


*/
import { ProductsGadgets,ProductsConsolas,ProductsDiversos } from "../Services/data.js";

 export const Gadgets = (v) => ProductsGadgets.forEach((object) => {
  // const Items_gadgets = document.querySelector(".Items_gadgets");
  let Item = document.createElement("div");
  Item.classList.add(".Item");
  Item.innerHTML =
    `<img src=${object.img}>` +
    `<p>${object.nombre}</p>` +
    `<p>$${object.precio}</p>` +
    `<a href=#>${object.ver}</a>`;
    v.appendChild(Item) 
    // console.log(Items_gadgets)
});

export const Consolas = (v) => ProductsConsolas.forEach((object) => {
  let Item = document.createElement("div");
  Item.classList.add(".Item");
  Item.innerHTML =
    `<img src=${object.img}>` +
    `<p>${object.nombre}</p>` +
    `<p>$${object.precio}</p>` +
    `<a href=#>${object.ver}</a>`;
    v.appendChild(Item) 

});

export const Diversos = (v) => ProductsDiversos.forEach((object) => {
  let Item = document.createElement("div");
  Item.classList.add(".Item");
  Item.innerHTML =
    `<img src=${object.img}>` +
    `<p>${object.nombre}</p>` +
    `<p>$${object.precio}</p>` +
    `<a href=#>${object.ver}</a>`;
    v.appendChild(Item) 

});




/*
let Element_Img = document.createElement("img")
Element_Img.classList.add("img_product")
let Element_Nombre = document.createElement("p")
Element_Nombre.classList.add("nombre_product")
let Element_Precio = document.createElement("p")
Element_Precio.classList.add("precio_product")
let Element_Link = document.createElement("a")
let Ite = document.createElement("div");
let ar =[]
Content_Gadget.forEach((ob) =>{
 Element_Img.src = ob.img;
 Element_Nombre = ob.nombre;
 Element_Precio = ob.precio;
 Element_Link = ob.ver;
 let ba = Element_Img+Element_Nombre+Element_Precio+Element_Link;
 ar.push(ba) 
})
console.log(ar)
as.innerHTML = ar.join("");
*/

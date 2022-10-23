import { Products } from "./Products.js";
import { CreateProduct } from "./Createproduct.js";

const div = document.querySelector(".Items_search");
const itemStorage = localStorage.getItem("product");
const product = Products();

const items = product.filter((element) => {
  return element.nombre.includes(itemStorage);
});

if (items.length) {
  items.forEach((e) => {
    let item = CreateProduct(e);
    div.appendChild(item);
  });
} else {
  console.log("no existe");
  let h2 = document.createElement("h2");
  h2.innerHTML = "lo sentimos no encontramos lo que estabas buscando";
  div.appendChild(h2);
}

//localStorage.removeItem(key);  //item
//localStorage.clear();

window.onunload = () => {
  // Clear the local storage
  localStorage.removeItem("product");
};

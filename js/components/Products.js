import {
  ProductsGadgets,
  ProductsConsolas,
  ProductsDiversos,
} from "../../Services/data.js";

export const Gadgets = (v) =>
  ProductsGadgets.forEach((object) => {
    let Item = document.createElement("div");
    Item.classList.add(".Item");
    Item.innerHTML =
      `<img src=${object.img}>` +
      `<p>${object.nombre}</p>` +
      `<p>$${object.precio}</p>` +
      `<a href=#>${object.ver}</a>`;
    v.appendChild(Item);
  });

export const Consolas = (v) =>
  ProductsConsolas.forEach((object) => {
    let Item = document.createElement("div");
    Item.classList.add(".Item");
    Item.innerHTML =
      `<img src=${object.img}>` +
      `<p>${object.nombre}</p>` +
      `<p>$${object.precio}</p>` +
      `<a href=#>${object.ver}</a>`;
    v.appendChild(Item);
  });

export const Diversos = (v) =>
  ProductsDiversos.forEach((object) => {
    let Item = document.createElement("div");
    Item.classList.add(".Item");
    Item.innerHTML =
      `<img src=${object.img}>` +
      `<p>${object.nombre}</p>` +
      `<p>$${object.precio}</p>` +
      `<a href=#>${object.ver}</a>`;
    v.appendChild(Item);
  });

export const AllProducts = () => {
  let productsconsolas = ProductsConsolas.map((e) => e.nombre);
  let productsgadgets = ProductsGadgets.map((e) => e.nombre);
  let productsdiversos = ProductsDiversos.map((e) => e.nombre);
  const AllProducts = productsgadgets.concat(
    productsconsolas,
    productsdiversos
  );
  return AllProducts;
};

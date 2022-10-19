export const CreateProduct = (object) => {
  let Item = document.createElement("div");
  Item.classList.add("Item");
  Item.innerHTML =
    `<img src=${object.img}>` +
    `<p>${object.nombre}</p>` +
    `<p>$${object.precio}</p>` +
    `<a href=#>${object.ver}</a>`;
  return Item;
};

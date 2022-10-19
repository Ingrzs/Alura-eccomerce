import { Products } from "./Products.js";

const Totalproduct = Products();

const divform = document.querySelector(".header__form");
const list = document.createElement("div");
list.className = "divlist";
divform.appendChild(list);
const input = document.querySelector(".search_input");

export const ChangeItem = (event) => {
  let data = event.target.value;
  list.innerHTML = ``;
  console.log(data.length);
  if (data.length) {
    let autoCompleteValues = filter(data);
    autoCompleteValues.forEach((value) => {
      AddItem(JSON.stringify(value.nombre).replace(/['"]+/g, ""));
    });
  }
};

const filter = (value) => {
  const filtervalues = Totalproduct.filter((v) =>
    v.nombre.toLowerCase().includes(value.toLowerCase())
  );

  return filtervalues;
};

const AddItem = (value) => {
  list.innerHTML += `<li>${value}</li>`;
};

export const selectItem = (event) => {
  if (event.target.tagName === "LI") {
    let li = event.target;
    input.value = li.textContent;
    list.innerHTML = ``;
  }
};

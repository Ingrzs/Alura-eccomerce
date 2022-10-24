import {
  DisplayGadgets,
  DisplayConsolas,
  DisplayDiversos,
} from "./components/DisplayProducts.js";
import { ChangeItem, selectItem } from "./components/Autocomplete.js";
import { SearchNav } from "./components/Formnav.js";
import { ClickProduct } from "./components/ClickProduct.js";

const Items_gadgets = document.querySelector(".Items_gadgets");
const Items_consolas = document.querySelector(".Items_consolas");
const Items_diversos = document.querySelector(".Items_diversos");

DisplayGadgets(Items_gadgets);
DisplayConsolas(Items_consolas);
DisplayDiversos(Items_diversos);

const input = document.querySelector(".search_input");
input.addEventListener("input", ChangeItem);

const elements_li = document.querySelector(".divlist");
elements_li.addEventListener("click", selectItem);

const button_search = document.querySelector(".button_search");
button_search.addEventListener("click", SearchNav);

const elementsItems = document.querySelectorAll(".Item");
elementsItems.forEach((elements) => {
  elements.lastChild.addEventListener("click", ClickProduct);
});

const btnlogin = document.querySelector(".btnlogin")
btnlogin.addEventListener("click" ,() => location.href = "login.html");
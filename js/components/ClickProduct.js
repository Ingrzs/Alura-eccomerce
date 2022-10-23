export const ClickProduct = (event) => {
  let itemvalue = event.target;
  localStorage.setItem("item", itemvalue.parentNode.outerHTML);
  location.href = "./productbyclick.html";
};

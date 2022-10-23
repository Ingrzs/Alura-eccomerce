const divclick = document.querySelector(".Items_target");
let item = localStorage.getItem("item");
divclick.innerHTML = item;

window.onunload = () => {
  // Clear the local storage
  localStorage.removeItem("item");
};

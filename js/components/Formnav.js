export const SearchNav = (event) => {
  event.preventDefault();
  const input = document.querySelector(".search_input");
  localStorage.setItem("product", input.value);
  location.href = "./productbynav.html";
};

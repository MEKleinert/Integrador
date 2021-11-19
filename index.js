let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

let cartItem = document.querySelector(".cartContainer");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".busqueda");

document.querySelector("#busqueda-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

// async function fetchData(url) {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     console.log(data.crew[0]);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData("../starter-code/data.json");

const menu = document.querySelector(".menu");
const main = document.querySelector("main");

function openMenu() {
  menu.classList.toggle("open");
}

function closeMenu() {
  menu.classList.toggle("open");
}

document.addEventListener("click", (e) => {
  if (main.contains(e.target)) {
    menu.classList.remove("open");
  }
});

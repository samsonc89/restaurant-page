export default function printMe() {
  console.log("Yee Haw! I get called from load.js!");
}
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

function loadNav() {
  const navBar = document.createElement("div");
  navBar.id = "navbar";

  const navBtns = document.createElement("div");
  navBtns.id = "navBtns";

  const title = document.createElement("h2");
  title.textContent = "Best Galbijjim";

  const homeButton = document.createElement("button");
  homeButton.classList.add("navButton");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", () => {
    loadHome();
    removeSelectedClass();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("navButton");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", () => {
    loadMenu();
    removeSelectedClass();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("navButton");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", () => {
    loadContact();
    removeSelectedClass();
  });

  navBtns.appendChild(homeButton);
  navBtns.appendChild(menuButton);
  navBtns.appendChild(contactButton);
  navBar.appendChild(title);
  navBar.appendChild(navBtns);
  homeButton.classList.add("selected");
  return navBar;
}

function loadWrapper() {
  //clear current content

  const mainWrapper = document.createElement("div");
  mainWrapper.id = "main-wrapper";

  return mainWrapper;
}

function removeSelectedClass() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("selected"));
  event.target.classList.add("selected");
}

export { loadNav, loadWrapper, removeSelectedClass };

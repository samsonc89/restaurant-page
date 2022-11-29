import printMe from "./modules/load.js";
import "./style.css";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());
// const content = document.createElement("div");
// content.id = "content";
// content.innerHTML = `
// <div id="header">
//   <div id="navbar">
//     <ul>
//       <li>Home</li>
//       <li>Menu</li>
//       <li>Contact</li>
//     </ul>
//   </div>
// </div>

// `;

// document.body.appendChild(content);

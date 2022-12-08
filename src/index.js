import { loadWrapper } from "./modules/load.js";
import "./style.css";
import { loadNav } from "./modules/load.js";

const content = document.querySelector("#content");

content.prepend(loadNav());

content.appendChild(loadWrapper());

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

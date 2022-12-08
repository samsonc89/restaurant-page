import { loadWrapper } from "./modules/load.js";
import "./style.css";
import { loadNav } from "./modules/load.js";

const content = document.querySelector("#content");

content.prepend(loadNav());

content.appendChild(loadWrapper());

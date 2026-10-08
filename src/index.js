// Task button.
export const taskBtn = document.createElement("button");
    taskBtn.textContent = "Add Task";

import "./styles.css";
import { leftPane, rightPane } from "./homepage.js";

const left = document.querySelector("#left");
const right = document.querySelector("#right");

left.appendChild(leftPane);
right.appendChild(rightPane);


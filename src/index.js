import { userBlock, navBlock } from "./homepage.js";

// Array of projects.
export const toDoProjects = [];

// Team todos.
export const toDoTeam = [];

// Default User name declaration.
export const defaultUser = document.createElement("h4");
    defaultUser.textContent = "Default";

// Default My Projects tasks.
const projectLeftBtn1 = document.createElement("button");
    projectLeftBtn1.textContent = "Fitness";

const projectLeftBtn2 = document.createElement("button");
    projectLeftBtn2.textContent = "Groceries";
    
const projectLeftBtn3 = document.createElement("button");
    projectLeftBtn3.textContent = "Appointments";

toDoProjects.push(projectLeftBtn1, projectLeftBtn2, projectLeftBtn3);








// DOM element select declarations.
const form = document.querySelector("#addTask");

// Hides form until user clicks add task button.
const hideForm = function hideForm() {
    form.style.display = "none";
};

hideForm();





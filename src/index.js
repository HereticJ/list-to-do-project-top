import { userBlock, navBlock } from "./homepage.js";
import { addTaskBtn, projectTaskDefaults } from "./tasks.js";

// Takes task data and appends them to a given list
class toDoList {
    constructor(listTitle, tasksArray, addTask) {
        this.listTitle = listTitle,
        this.tasksArray = tasksArray,
        this.addTask = addTask
    };
};

// Array of projects.
export const toDoProjects = [];
// Default My Projects tasks.
const projectLeftBtn1 = document.createElement("button");
    projectLeftBtn1.textContent = "Fitness";
const projectLeftBtn2 = document.createElement("button");
    projectLeftBtn2.textContent = "Groceries";
const projectLeftBtn3 = document.createElement("button");
    projectLeftBtn3.textContent = "Appointments";
toDoProjects.push(projectLeftBtn1, projectLeftBtn2, projectLeftBtn3);

// Team todos.
export const toDoTeam = [];
// Default Team tasks.
const teamBtn1 = document.createElement("button");
    teamBtn1.textContent = "New Brand";
const teamBtn2 = document.createElement("button");
    teamBtn2.textContent = "Website Update";
const teamBtn3 = document.createElement("button");
    teamBtn3.textContent = "Product Roadmap";
toDoTeam.push(teamBtn1, teamBtn2, teamBtn3);

// Default User name declaration.
export const defaultUser = document.createElement("h4");
    defaultUser.textContent = "Default";

// Creates default todo list categories.
const myProjects = new toDoList("My Projects", [2], addTaskBtn);
const team = new toDoList("Team", [2], addTaskBtn);

// DOM element select declarations.
const form = document.querySelector("#addTask");

// Hides form until user clicks add task button.
const hideForm = function hideForm() {
    form.style.display = "none";
};
hideForm();





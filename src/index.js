import "./styles.css";
import { projectTasks, teamTasks } from "./tasks.js";

// Default User name declaration.
export const defaultUser = document.createElement("h4");
    defaultUser.textContent = "Default";

// Creates task button.
export const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add Task";

// Array with left-hand navigation buttons.
export const leftBtns = [];

// Left-hand Navigation buttons.
const todayBtn = document.createElement("button");
    todayBtn.textContent = "Today";
const upcomingBtn = document.createElement("button");
    upcomingBtn.textContent = "Upcoming";

// Adds left-hand navigation buttons to leftBtns array.
leftBtns.push(addTaskBtn, todayBtn, upcomingBtn);
leftBtns.id = "leftBtns";

left.appendChild(leftBtns[0]);
left.appendChild(leftBtns[1]);
left.appendChild(leftBtns[2]);

left.appendChild(projectTasks);
left.appendChild(teamTasks);

// Hides form until user clicks add task button.
const hideForm = function hideForm() {
    form.style.display = "none";
};

hideForm();

// Add Task button function to open form so users can add todos.
addTaskBtn.addEventListener("click", addTaskForm);
    function addTaskForm() {
        document.querySelector("addTask").style.display = "block";
};

// Array of projects.
export const toDoProjects = [];

function toDoProjectsLister(toDoProjects) {
    for (i = 0; i < toDoProjects.length; i++) {

    }
}






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

// DOM element select declarations.
const form = document.querySelector("#addTask");





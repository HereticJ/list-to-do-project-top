import "./styles.css";
import { form, left, navBlock, userBlock, projectBlock, teamBlock, right } from "./homepage.js";
import { addTaskBtn, projectTasks, teamTasks } from "./tasks.js";
import { myProjectsCategory, teamCategory } from "./category.js";

// Default User name declaration.
export const defaultUser = document.createElement("h4");
    defaultUser.textContent = "Default";

// Left-hand Navigation buttons.
const todayBtn = document.createElement("button");
    todayBtn.textContent = "Today";
const upcomingBtn = document.createElement("button");
    upcomingBtn.textContent = "Upcoming";

// Array with left-hand navigation buttons.
export const leftBtns = [];
leftBtns.id = "leftBtns";

// Adds left-hand navigation buttons to leftBtns array.
leftBtns.push(addTaskBtn, todayBtn, upcomingBtn);

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
projectBlock.appendChild(toDoProjects[0], toDoProjects[1], toDoProjects[2]);

function toDoProjectsLister(toDoProjects) {
    for (i = 0; i < toDoProjects.length; i++) {

// adds projectBlock and Left My Projects header to toDoProjects array.
toDoProjects.push(projectBlock, projectsLeftHeaderBtn);

// Appends My Projects to left-hand navBlock with toDoProjects array items.
left.appendChild(projectBlock);
    projectBlock.appendChild(projectsLeftHeaderBtn);
        projectBlock.appendChild(toDoProjects[0], toDoProjects[1],toDoProjects[2]);
    }
};


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

// Initializes left hand structure for first visit.
left.appendChild(userBlock);
    userBlock.appendChild(defaultUser);

left.appendChild(navBlock);
    // Appends navBlock to left-hand side and appends leftBtns array items.
    navBlock.appendChild(leftBtns[0]);
    navBlock.appendChild(leftBtns[1]);
    navBlock.appendChild(leftBtns[2]);

left.appendChild(projectBlock);
    projectBlock.appendChild(toDoProjects[0]);
    projectBlock.appendChild(toDoProjects[1]);
    projectBlock.appendChild(toDoProjects[2]);

left.appendChild(teamBlock);
    // Appends teamBlock with toDoTeam array items.
    teamBlock.appendChild(toDoTeam[0]);
    teamBlock.appendChild(toDoTeam[1]);
    teamBlock.appendChild(toDoTeam[2]);

// Add Task button function to open form so users can add todos.
addTaskBtn.addEventListener("click", addTaskForm);
    function addTaskForm() {
        document.querySelector("addTask").style.display = "block";
};

// Hides form until user clicks add task button.
const hideForm = function hideForm() {
    form.style.display = "none";
};

hideForm();





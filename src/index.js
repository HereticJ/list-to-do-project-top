import "./styles.css";
import { form, left, navBlock, userBlock, teamBlock, right,
    headlineToday, projectsRightHeader, projectEntriesList, projectListItem, 
    teamRightHeader, teamEntriesList, teamListItem
 } from "./homepage.js";
import { addTaskBtn, projectTasks, 
    teamTasks } from "./tasks.js";
    console.log(projectTasks[0]);
import { myProjectsCategory, teamCategory, categoryArray }
 from "./category.js";

// LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT 

// Default User name declaration.
export const defaultUser = document.createElement("h3");
    defaultUser.textContent = "Default";

// Initializes left hand structure for first visit.
left.appendChild(userBlock);
    userBlock.appendChild(defaultUser);

// Array with left-hand navigation buttons.
export const leftBtns = [];
leftBtns.id = "leftBtns";

// Left-hand Navigation buttons.
const todayBtn = document.createElement("button");
    todayBtn.textContent = "Today";
const upcomingBtn = document.createElement("button");
    upcomingBtn.textContent = "Upcoming";

// Adds left-hand navigation buttons to leftBtns array.
leftBtns.push(addTaskBtn, todayBtn, upcomingBtn);

left.appendChild(navBlock);
    // Appends navBlock to left-hand side and appends leftBtns array items.
    navBlock.appendChild(leftBtns[0]);
    navBlock.appendChild(leftBtns[1]);
    navBlock.appendChild(leftBtns[2]);

function addNavCategories(array) {
    for (let i = 0; i < array.length; i++) {

        const categoryBlock = document.createElement("div")
        categoryBlock.id = "category" + `${array[i].position}`
        categoryBlock.textContent = `${array[i].categoryTitle}`
        left.appendChild(categoryBlock)

    }
};

addNavCategories(categoryArray);

// Default My Projects tasks.
function addNavSubCategories(array) {
    for (let i = 0; i < array.length; i++) {

        const subCategoryListItem = document.createElement("a")
        subCategoryListItem.id = `${array[i].subCategoryListItem}`
        subCategoryListItem.href = `#${array[i].subCategory}}`
        subCategoryListItem.textContent = `${array[i].subCategory}`

    }
};

addNavSubCategories(projectTasks);
addNavSubCategories(teamTasks);

function appendNavLinks(array) {

    if (array[i].category == `#${category1}`) {
        category1.appendChild(subCategoryListItem)
    } else if (array[i].category == `#${category2}`) {
        category2.appendChild(subCategoryListItem)
    }
};

// Default Team todos.
export const toDoTeam = [];

// Default Team tasks.
const teamBtn1 = document.createElement("button");
    teamBtn1.textContent = "New Brand";

const teamBtn2 = document.createElement("button");
    teamBtn2.textContent = "Website Update";

const teamBtn3 = document.createElement("button");
    teamBtn3.textContent = "Product Roadmap";

toDoTeam.push(teamBtn1, teamBtn2, teamBtn3);

// Appends teamBlock with toDoTeam array items.
teamBlock.appendChild(toDoTeam[0]);
teamBlock.appendChild(toDoTeam[1]);
teamBlock.appendChild(toDoTeam[2]);

// RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT

headlineToday.textContent = "Today";
    right.appendChild(headlineToday);

projectsRightHeader.textContent = "My Projects";
    right.appendChild(projectsRightHeader);

right.appendChild(projectEntriesList);
    projectEntriesList.appendChild(projectListItem);

teamRightHeader.textContent = "Team";
right.appendChild(teamRightHeader);

right.appendChild(teamEntriesList);

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



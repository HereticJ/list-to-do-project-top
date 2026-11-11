import "./styles.css";
import { form, left, navBlock, userBlock, projectBlock, teamBlock, right,
    headlineToday, projectsRightHeader, projectEntriesList, projectListItem, 
    teamRightHeader, teamEntriesList, teamListItem
 } from "./homepage.js";
import { addTaskBtn, projectTasks, 
    teamTasks } from "./tasks.js";
    console.log(projectTasks[0]);
import { myProjectsCategory, teamCategory, categoryArray, subCategoryArray, }
 from "./category.js";

// LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT 

// Default User name declaration.
export const defaultUser = document.createElement("h4");
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

left.appendChild(projectBlock);

// Default My Projects tasks.
function addNavSubCategories(array) {
    for (let i = 0; i < Array.length; i++) {

        const subCategoryList = []
        const subCategoryListItem = document.createElement("a")
        subCategoryList.id = "subCategories"
        subCategoryListItem.id = "subCategory"
        subCategoryListItem.textContent = `${array[i].subCategory}`
        subCategoryList.push(`${subCategoryListItem[i]}`)
        projectBlock.appendChild(subCategoryListItem[i])

    }
};

addNavSubCategories(projectTasks);

left.appendChild(teamBlock);

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


console.log(categoryArray);
console.log(subCategoryArray);


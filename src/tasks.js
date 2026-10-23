// Creates, exports, and adds text to add task buttons.
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

// Creates new task categories for todo lists.
class taskCategory {
    constructor(categoryTitle, taskList) {
        this.categoryTitle = categoryTitle,
        this.taskList = [taskList]
    }
};

class toDo {
    // class methods
    constructor(description, dueDate, priority, notes, checklist, category) {
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.category = category;
    }
};

// My Project Tasks.
export const projectTasks = [];

// Default My Project todo items.
const dProjectTask1 = new toDo("Do 30 mins of yoga", "7:30 AM", "high", 
    "", false, "Fitness");
const dProjectTask2 = new toDo("Dentist appointment", "10:00 AM", "high",
     "", false, "Appointments");
const dProjectTask3 = new toDo("Buy bread", "", "low", false, "", false,
     "Groceries");

// Add default My Project todo items to the My Project array.
projectTasks.push(dProjectTask1, dProjectTask2, dProjectTask3);

// Default My Project task category.
const myProjects = new taskCategory("My Projects", [projectTasks.length]);

// Add Task button function to open form so users can add todos.
taskBtn.addEventListener("click", addTaskForm);
    function addTaskForm() {
        document.querySelector("addTask").style.display = "block";
};










/*
// Block for My Projects in right pane.
const projectsRightHeader = document.createElement("h4");
projectsRightHeader.id = "myProjectsRightHeader";
    projectsRightHeader.textContent = "My Projects";
        rightPane.appendChild(projectsRightHeader);

    const projectEntriesList = document.createElement("ul");
    projectEntriesList.id = "projectList";
        rightPane.appendChild(projectEntriesList);

    const projectListItem = document.createElement("li");
        projectListItem.id = "projectListItem";
        projectEntriesList.appendChild(projectListItem);

        const projectEntryCheckbox = document.createElement("input");
            projectEntryCheckbox.setAttribute("type", "checkbox");
            projectEntryCheckbox.id = "projectEntryCheckbox";
            projectListItem.appendChild(projectEntryCheckbox);

        const projectListTitle = document.createElement("h4");
            projectListTitle.id = "projectEntryTitle";
            projectListItem.appendChild(projectListTitle);
                projectListTitle.textContent = "Do 30 mins of yoga.";

        const projectListTime = document.createElement("p");
            projectListTime.id = "projectTime";
            projectListItem.appendChild(projectListTime);
                projectListTime.textContent = "7:30 AM";
*/


// Creates task button.
export const addTaskBtn = document.createElement("button");
addTaskBtn.id = "addTaskBtn";
    addTaskBtn.textContent = "Add Task";

function generateUUID() {
    const id = `${ crypto.randomUUID() }`
    return id;
};

class toDo {
    // class methods
    constructor(description, dueDate, priority, notes, checklist, category, 
        subCategory, id) {
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.category = category;
        this.subCategory = subCategory;
        this.id = generateUUID(id);
    }
};

// My Project Tasks.
export const projectTasks = [];
projectTasks.id = "projectTasks";


/*
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





        const teamEntryCheckbox = document.createElement("input");
            teamEntryCheckbox.setAttribute("type", "checkbox");
            teamEntryCheckbox.id = "teamEntryCheckbox";
            teamListItem.appendChild(teamEntryCheckbox);

        const teamListTitle = document.createElement("h4");
            teamListTitle.id = "teamEntryTitle";
            teamListItem.appendChild(teamListTitle);
                teamListTitle.textContent = "Plan user research sessions";

        const teamListTime = document.createElement("p");
            teamListTime.id = "teamTime";
            teamListItem.appendChild(teamListTime);
                teamListTime.textContent = "2:00 PM";
*/

// Button maker.
function btnMaker(array) {
    for (let i = 0; i < array.length; i++) {
        const categoryBtn = document.createElement("button");
        const subCategoryBtn = document.createElement("button");
        categoryBtn.textContent = array[i].category
        subCategoryBtn.textContent = array[i].subCategory
        categoryBtn.classList.add(`${categoryBtn}`);
        subCategoryBtn.classList.add(subCategoryBtn);
    }
};

// Default My Project todo items.
const dProjectTask1 = new toDo("Do 30 mins of yoga", "7:30 AM", "high", 
    "", false, "My", "Projects", "Fitness");
const dProjectTask2 = new toDo("Dentist appointment", "10:00 AM", "high",
     "", false, "My", "Projects", "Appointments");
const dProjectTask3 = new toDo("Buy bread", "", "low", false, "", false,
     "My", "Projects", "Groceries");


// Add default My Project todo items to the My Project array.
projectTasks.push(dProjectTask1, dProjectTask2, dProjectTask3);

const btnsArray = [];

btnsArray.push(btnMaker(projectTasks));
console.log(btnsArray);


// Team tasks.
export const teamTasks = [];

// Default Team todo items.
const dTeamTask = new toDo("Plan user resarch sessions", "2:00 PM", "high", 
    "", false, "Website Update"
);

teamTasks.push(dTeamTask);


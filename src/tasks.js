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

// Default My Project todo items.
const dProjectTask1 = new toDo("Do 30 mins of yoga", "7:30 AM", "high", 
    "", false, "My Projects", "Fitness");
const dProjectTask2 = new toDo("Dentist appointment", "10:00 AM", "high",
     "", false, "My Projects", "Appointments");
const dProjectTask3 = new toDo("Buy bread", "", "low", false, "", false,
     "My Projects", "Groceries");

// My Project Tasks.
export const projectTasks = [];
projectTasks.id = "projectTasks";

// Add default My Project todo items to the My Project array.
projectTasks.push(dProjectTask1);
projectTasks.push(dProjectTask2);
projectTasks.push(dProjectTask3);

// Team tasks.
export const teamTasks = [];

// Default Team todo items.
const dTeamTask = new toDo("Plan user resarch sessions", "2:00 PM", "high", 
    "", false, "Team", "Website Update");

teamTasks.push(dTeamTask);



/*
function taskDisplay(array) {
    for (i = 0; i < array.length; i++) {

        const card = document.createElement("div")
        const addId = document.createAttribute("data-id")
        card.setAttributeNode(addId)

    }
}





*/
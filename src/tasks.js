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
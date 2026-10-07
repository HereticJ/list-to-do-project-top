const form = document.querySelector("#addTask");

export const hideForm = function hideForm() {
    form.style.display = "none";
};

export const taskBtn = document.createElement("button");

class toDo {
    // class methods
    constructor(title, description, dueDate, priority, notes, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }
};

// Starting todo tasks.
const task1 = new toDo("Do 30 mins of yoga.", "", "7:30 AM", "", "", "");

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

taskBtn.addEventListener("click", addTaskForm);
    function addTaskForm() {
        document.querySelector("addTask").style.display = "block";
};
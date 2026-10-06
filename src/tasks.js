const form = document.querySelector("#addTask");

export const hideForm = function hideForm() {
    form.style.display = "none";
};

export const taskBtn = document.createElement("button");

const  = {
    title: "title",
    description: "description",
    dueDate: "1/1/2000",
    priority: "low/high",
    notes: "",
    checklist: document.createElement("ol"),
}

class toDo {
    // class methods
    constructor(title) {
        this.title = title;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    constructor(description) {
        this.description = description;
    }


}

taskBtn.addEventListener("click", addTaskForm);
    function addTaskForm() {
        document.querySelector("addTask").style.display = "block";
};
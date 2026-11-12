import { addTaskBtn, projectTasks, teamTasks } from "./tasks.js";

// Creates new task categories for todo lists.
class taskCategory {
    constructor(categoryTitle, taskList, subCategory) {
        this.categoryTitle = categoryTitle,
        this.taskList = [taskList],
        this.subCategory = subCategory
    }
};

// Takes task data and appends them to a given list
class toDoList {
    constructor(listTitle, tasksArray, addTaskBtn) {
        this.listTitle = listTitle,
        this.tasksArray = tasksArray,
        this.addTaskBtn = addTaskBtn
    };
};

export const categoryArray = [];

// Default My Project task category.
export const myProjectsCategory = new taskCategory("My Projects", [projectTasks.length]);
export const teamCategory = new taskCategory("Team", [teamTasks.length]);

// Creates default todo list categories.
export const myProjectsList = new toDoList("My Projects", [2], addTaskBtn);
export const teamList = new toDoList("Team", [2], addTaskBtn);

categoryArray.push(myProjectsCategory);
categoryArray.push(teamCategory);



// Left pane for User details.
export const leftPane = document.createElement("div");
    const userProfile = document.createElement("h4");
        userProfile.textContent = "Default User";
    const mainLeftNav = document.createElement("ul");
    const addTaskEntry = document.createElement("li");
        const addTaskBtn = document.createElement("button");
            addTasksBtn.textContent = "Add Task";
    const todayEntry = document.createElement("li");
        const todayBtn = document.createElement("button");
            todayBtn.textContent = "Today";
    const upcomingEntry = document.createElement("li");
        const upcomingBtn = document.createElement("button");
            upcomingBtn.textContent = "Upcoming";
    const projectsLeftHeader = document.createElement("h4");
        const projectsLeftHeaderBtn = document.createElement("button");
            projectsLeftHeaderBtn.textContent = "My Projects";
    const projectsLeftList = document.createElement("ul");
        const projectLeftList1 = document.createElement("button");
            projectLeftList1.textContent = "Fitness";
        const projectLeftList2 = document.createElement("button");
            projectLeftList2.textContent = "Groceries";
        const projectLeftList3 = document.createElement("button");
            projectLeftList3.textContent = "Appointments";

// Right pane for displaying projects, tasks, and control buttons.
export const rightPane = document.createElement("div");
    const headline = document.createElement("h1");
    const projectsRightHeader = document.createElement("h4");
    const markReadBtn = document.createElement("button");
    const projectDetails = document.createElement("p");
    const dateDetails = document.createElement("p");
    const addNewTaskBtn = document.createElement("button");

// Initializes structure for first visit.
leftPane.appendChild(userProfile);
leftPane.appendChild(mainLeftNav);
    mainLeftNav.appendChild(addTaskEntry);
        mainLeftNav.appendChild(addTaskBtn);
    mainLeftNav.appendChild(todayEntry);
        mainLeftNav.appendChild(addTaskBtn);
    mainLeftNav.appendChild(upcomingEntry);
        mainLeftNav.appendChild(upcomingBtn);

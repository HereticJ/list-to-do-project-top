const left = document.querySelector("#left");
const right = document.querySelector("#right");
const leftAddTaskBtn = document.querySelector("#leftAddTaskBtn");
const rightAddTaskBtn = document.querySelector("#rightAddTaskBtn");

// Left pane for User details.
export const leftPane = document.createElement("div");
    const userProfile = document.createElement("h4");
        userProfile.textContent = "Default User";
    const mainLeftNav = document.createElement("ul");
    const addTaskEntry = document.createElement("li");
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
        headline.textContent = "Today";
    const projectsRightHeader = document.createElement("h4");
        projectsRightHeader.textContent = "My Projects";
    const projectEntry = document.createElement("div");
    

    const projectDetails = document.createElement("p");

    const dateDetails = document.createElement("p");

    // Exports new task button for tasks module.
    export const addNewTaskBtn = document.createElement("button");

// Initializes structure for first visit.
left.appendChild(leftPane);
    leftPane.appendChild(userProfile);
    leftPane.appendChild(mainLeftNav);
        mainLeftNav.appendChild(addTaskEntry);
        mainLeftNav.appendChild(todayEntry);
        mainLeftNav.appendChild(upcomingEntry);
            mainLeftNav.appendChild(upcomingBtn);
        mainLeftNav.appendChild(projectsLeftHeader);
            mainLeftNav.appendChild(projectsLeftHeaderBtn);
        mainLeftNav.appendChild(projectsLeftList);
            projectsLeftList.appendChild(projectLeftList1);
            projectsLeftList.appendChild(projectLeftList2);
            projectsLeftList.appendChild(projectLeftList3);

right.appendChild(rightPane);
    rightPane.appendChild(headline);
        rightPane.appendChild(projectsRightHeader);


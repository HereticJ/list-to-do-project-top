const left = document.querySelector("#left");
const right = document.querySelector("#right");
const leftAddTaskBtn = document.querySelector("#leftAddTaskBtn");
const rightAddTaskBtn = document.querySelector("#rightAddTaskBtn");

// Left hand side navigation.
export const leftPane = document.createElement("div");
leftPane.id = "leftPane";
    const userBlock = document.createElement("div");
    userBlock.id = "userBlock";
        const userProfile = document.createElement("h4");
            userProfile.textContent = "Default User";
    
    const navBlock = document.createElement("div");
    navBlock.id = "navBlock";
        const todayBtn = document.createElement("button");
            todayBtn.textContent = "Today";
        const upcomingBtn = document.createElement("button");
            upcomingBtn.textContent = "Upcoming";

    const projectBlock = document.createElement("div");
    projectBlock.id = "projectBlock";
            const projectsLeftHeaderBtn = document.createElement("button");
                projectsLeftHeaderBtn.textContent = "My Projects";
            const projectLeftBtn1 = document.createElement("button");
            projectLeftBtn1.textContent = "Fitness";
            const projectLeftBtn2 = document.createElement("button");
            projectLeftBtn2.textContent = "Groceries";
            const projectLeftBtn3 = document.createElement("button");
                    projectLeftBtn3.textContent = "Appointments";

// Initializes structure for first visit.
left.appendChild(leftPane);
    leftPane.appendChild(userBlock);
        userBlock.appendChild(userProfile);
    
    leftPane.appendChild(navBlock);
        navBlock.appendChild(leftAddTaskBtn);
        navBlock.appendChild(todayBtn);
        navBlock.appendChild(upcomingBtn);

    leftPane.appendChild(projectBlock);
        projectBlock.appendChild(projectsLeftHeaderBtn);
            projectBlock.appendChild(projectLeftBtn1);
            projectBlock.appendChild(projectLeftBtn2);
            projectBlock.appendChild(projectLeftBtn3);










            
// Right hand side navigation.
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

right.appendChild(rightPane);
    rightPane.appendChild(headline);
        rightPane.appendChild(projectsRightHeader);


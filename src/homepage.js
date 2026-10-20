import "./styles.css";
import { leftBtns } from "./tasks.js";
import { defaultUser, toDoProjects, toDoTeam } from "./index.js";

// Left side of web app.
export const left = document.querySelector("#left");

// Left hand side navigation.
export const leftPane = document.createElement("div");
    leftPane.id = "leftPane";

// Div for User Profile buttons/name.
export const userBlock = document.createElement("div");
    userBlock.id = "userBlock";

// Div for Left-hand navigation elements.
export const navBlock = document.createElement("div");
    navBlock.id = "navBlock";

// Div for Left-hand My Projects block.
const projectBlock = document.createElement("div");
    projectBlock.id = "projectBlock";

// Left-hand My Projects Header.
const projectsLeftHeaderBtn = document.createElement("button");
    projectsLeftHeaderBtn.textContent = "My Projects";

// adds projectBlock and Left My Projects header to toDoProjects array.
toDoProjects.push(projectBlock, projectsLeftHeaderBtn);

const teamBlock = document.createElement("div");
    teamBlock.id = "teamBlock";

const teamLeftheaderBtn = document.createElement("button")
    teamLeftheaderBtn.textContent = "Team";

// Initializes left hand structure for first visit.
leftPane.appendChild(userBlock);
    userBlock.appendChild(defaultUser);
// Appends navBlock to left-hand side and appends leftBtns array items.
leftPane.appendChild(navBlock);
    navBlock.appendChild(leftBtns[0], leftBtns[1], leftBtns[2]);
// Appends My Projects to left-hand navBlock with toDoProjects array items.
leftPane.appendChild(projectBlock);
    projectBlock.appendChild(projectsLeftHeaderBtn);
        projectBlock.appendChild(toDoProjects[0], toDoProjects[1],toDoProjects[2]);
// Appends Teamblock with toDoTeam array items.
leftPane.appendChild(teamBlock)
    teamBlock.appendChild(teamLeftHeaderBtn);    
        teamBlock.appendChild(toDoTeam[0], toDoTeam[1], toDoTeam[2]);

left.appendChild(leftPane);




// Right side of web app. 
export const right = document.querySelector("#right");

// Right hand side navigation.
const rightPane = document.createElement("div");
    rightPane.id = "rightPane";
// Headline for Today section.
const headlineToday = document.createElement("h1");
headlineToday.id = "headlineToday";
    headlineToday.textContent = "Today";
        rightPane.appendChild(headlineToday);

// Block for My Projects in right pane.
const projectsRightHeader = document.createElement("h4");
projectsRightHeader.id = "projectsRightHeader";
    projectsRightHeader.textContent = "My Projects";
        rightPane.appendChild(projectsRightHeader);



class projectTask {
    constructor(projectListItem, projectListCheckbox, projectListTitle, projectListTime) {
        this.projectListItem = projectListItem,
        this.projectListCheckbox = projectListCheckbox,
        this.projectListTitle = projectListTitle,
        this.projectListTime = projectListTime
    };
};
const myProjects = [];

// Default My Project Tasks.
const myProjectTask1 = new projectTask("item1", false, "Fitness", "7:30 AM");
myProjects.push (myProjectTask1);

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

    // Block for Team(misc) in right pane.
    const teamRightHeader = document.createElement("h4");
    teamRightHeader.id = "teamRightHeader";
        teamRightHeader.textContent = "Team";
            rightPane.appendChild(teamRightHeader);

        const teamEntriesList = document.createElement("ul");
        teamEntriesList.id = "teamList";
            rightPane.appendChild(teamEntriesList);

        const teamListItem = document.createElement("li");
            teamListItem.id = "teamListItem";
            teamEntriesList.appendChild(teamListItem);

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

right.appendChild(rightPane);







            


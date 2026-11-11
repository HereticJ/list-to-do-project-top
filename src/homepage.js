import "./styles.css";
import { leftBtns, defaultUser } from "./index.js";
import { addTaskBtn, projectTasks, teamTasks } from "./tasks.js";
import { myProjectsCategory, teamCategory } from "./category.js";

export const form = document.querySelector("#addTask");

export const main = document.querySelector("#main");

// Left side.
export const left = document.querySelector("#left");

// Right side of web app. 
export const right = document.querySelector("#right");

// User Profile buttons/name.
export const userBlock = document.createElement("div");
    userBlock.id = "userBlock";

// Left-hand navigation elements.
export const navBlock = document.createElement("div");
    navBlock.id = "navBlock";

// Left-hand My Projects block.
export const projectBlock = document.createElement("div");
    projectBlock.id = "projectBlock";

// Left-hand My Projects Header.
export const projectsLeftHeaderBtn = document.createElement("button");
    projectsLeftHeaderBtn.textContent = "My Projects";

export const teamBlock = document.createElement("div");
    teamBlock.id = "teamBlock";

export const teamLeftheaderBtn = document.createElement("button")
    teamLeftheaderBtn.textContent = "Team";

main.appendChild(left);
main.appendChild(right);

// Headline for Today section.
export const headlineToday = document.createElement("h1");
headlineToday.id = "headlineToday";

// Block for My Projects in right pane.
export const projectsRightHeader = document.createElement("h4");
projectsRightHeader.id = "projectsRightHeader";

// Unordered list element for My Projects right-hand section.
export const projectEntriesList = document.createElement("ul");
projectEntriesList.id = "projectEntriesList";

// List item for My Projects right-hand section.
export const projectListItem = document.createElement("li");
    projectListItem.id = "projectListItem";
        
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
export const teamRightHeader = document.createElement("h4");
teamRightHeader.id = "teamRightHeader";

export const teamEntriesList = document.createElement("ul");
teamEntriesList.id = "teamList";
    
export const teamListItem = document.createElement("li");
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

main.appendChild(right);






            


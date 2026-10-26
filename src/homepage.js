import "./styles.css";
import { leftBtns } from "./tasks.js";
import { defaultUser, toDoProjects, toDoTeam } from "./index.js";
import { myProjectCategory, teamCategory } from "./category.js";

// Left side.
const left = document.querySelector("#left");

// User Profile buttons/name.
const userBlock = document.createElement("div");
    userBlock.id = "userBlock";

// Left-hand navigation elements.
const navBlock = document.createElement("div");
    navBlock.id = "navBlock";

// Left-hand My Projects block.
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
left.appendChild(userBlock);
    userBlock.appendChild(defaultUser);

// Appends navBlock to left-hand side and appends leftBtns array items.
left.appendChild(navBlock);
    navBlock.appendChild(leftBtns[0], leftBtns[1], leftBtns[2]);

// Appends My Projects to left-hand navBlock with toDoProjects array items.
left.appendChild(projectBlock);
    projectBlock.appendChild(projectsLeftHeaderBtn);
        projectBlock.appendChild(toDoProjects[0], toDoProjects[1],toDoProjects[2]);

// Appends Teamblock with toDoTeam array items.
left.appendChild(teamBlock)
    teamBlock.appendChild(teamLeftHeaderBtn);    
        teamBlock.appendChild(toDoTeam[0], toDoTeam[1], toDoTeam[2]);

// Right side of web app. 
const right = document.querySelector("#right");

// Headline for Today section.
const headlineToday = document.createElement("h1");
headlineToday.id = "headlineToday";
    headlineToday.textContent = "Today";
        right.appendChild(headlineToday);

// Block for My Projects in right pane.
const projectsRightHeader = document.createElement("h4");
projectsRightHeader.id = "projectsRightHeader";
    projectsRightHeader.textContent = "My Projects";
        right.appendChild(projectsRightHeader);

    const projectEntriesList = document.createElement("ul");
    projectEntriesList.id = "projectList";
        right.appendChild(projectEntriesList);

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
            right.appendChild(teamRightHeader);

        const teamEntriesList = document.createElement("ul");
        teamEntriesList.id = "teamList";
            right.appendChild(teamEntriesList);

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







            


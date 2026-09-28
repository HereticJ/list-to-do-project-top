const taskBtn = document.createElement("button");
taskBtn.textContent = "Add Task";

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
leftPane.appendChild(userBlock);
    userBlock.appendChild(userProfile);

leftPane.appendChild(navBlock);
    navBlock.appendChild(taskBtn);
    navBlock.appendChild(todayBtn);
    navBlock.appendChild(upcomingBtn);

leftPane.appendChild(projectBlock);
    projectBlock.appendChild(projectsLeftHeaderBtn);
        projectBlock.appendChild(projectLeftBtn1);
        projectBlock.appendChild(projectLeftBtn2);
        projectBlock.appendChild(projectLeftBtn3);


            
// Right hand side navigation.
export const rightPane = document.createElement("div");
rightPane.id = "rightPane";
    const headline = document.createElement("h1");
    headline.id = "headline";
        headline.textContent = "Today";
            rightPane.appendChild(headline);

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

    // Block for Team(misc) in right pane.
    const teamRightHeader = document.createElement("h4");
    teamRightHeader.id = "teamRightHeader";
        teamRightHeader.textContent = "Team";
            rightPane.appendChild(teamRightHeader);

        const teamEntriesList = document.createElement("ul");
        teamEntriesList.id = "teamList";
            rightPane.appendChild(teamEntriesList);

        const teamListItem = document.createElement("li");
            teamListItem.id = "listItemTeam";
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

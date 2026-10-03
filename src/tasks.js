const form = document.querySelector("#addTask");

export const hideForm = function hideForm() {
    form.style.display = "none";
};

export const taskBtn = document.createElement("button");

taskBtn.addEventListener("click", addTaskForm);
    function addTaskForm() {
        document.querySelector("addTask").style.display = "block";
};
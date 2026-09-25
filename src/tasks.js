const taskBtn = document.querySelector(".addTask");
export const hideForm = function hideForm() {
    document.querySelector("addTask").style.display = "none";
}

// 
taskBtn.addEventListener("click", addTaskForm);
    function addTaskForm() {
        document.querySelector("addTask").style.display = "block";

};
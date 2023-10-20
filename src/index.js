const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");
const deleteListButton = document.querySelector("[data-delete-list-button]");
const listDisplayContainer = document.querySelector("[data-list-display-container]");
const listTitleElement = document.querySelector("[data-list-title]");
const listCountElement = document.querySelector("[data-list-count]");
const tasksContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.querySelector("#task-template");
const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskInput = document.querySelector("[data-new-task-input]");
const newTaskDate = document.querySelector("#due-date");
const newTaskPriority = document.querySelector("#priority");
const newTaskDescription = document.querySelector("#description");
const clearCompleteTasksButton = document.querySelector("[data-clear-complete-tasks-button]");
const overlay = document.querySelector("#overlay");
const formContainer = document.querySelector(".container");
const closeButton = document.querySelector(".close");
const addButton = document.querySelector(".add-btn");
const hamburger = document.querySelector(".hamburger");

let lists = JSON.parse(localStorage.getItem("task.lists")) || [];
let selectedListId = localStorage.getItem("task.selectedListId");
let modalOpen = false;

function renderAndSave() {
  render();
  localStorage.setItem("task.lists", JSON.stringify(lists));
  localStorage.setItem("task.selectedListId", selectedListId);
}

function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  
function renderTaskCount(selectedList) {
    const incompleteTaskCount = selectedList.tasks.filter((task) => !task.complete).length;
    const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
  }
  
  function colorTasks(selectedList) {
    const todos = [...document.querySelectorAll(".todo")];
    const checkbox = [...document.querySelectorAll(".checkbox")];
  
    selectedList.tasks.forEach((task, index) => {
      if (task.priority === "High") {
        checkbox[index].style.border = "2px solid #ed1250";
      } else if (task.priority === "Medium") {
        checkbox[index].style.border = "2px solid #d3d00f";
      } else {
        checkbox[index].style.border = "2px solid #0fc53d";
      }
    });
  }
  
  function render() {
    clearElement(listsContainer);
    renderLists();
    const selectedList = lists.find((list) => list.id === selectedListId);
  
    if (selectedListId === null) {
      listDisplayContainer.style.display = "none";
    } else {
      listDisplayContainer.style.display = "";
      listTitleElement.innerHTML = `<i class="fas fa-tasks"></i> ${selectedList.name}`;
      renderTaskCount(selectedList);
      clearElement(tasksContainer);
      renderTasks(selectedList);
      colorTasks(selectedList);
    }
  }
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
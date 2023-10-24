/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const listsContainer = document.querySelector(\"[data-lists]\");\r\nconst newListForm = document.querySelector(\"[data-new-list-form]\");\r\nconst newListInput = document.querySelector(\"[data-new-list-input]\");\r\nconst deleteListButton = document.querySelector(\"[data-delete-list-button]\");\r\nconst listDisplayContainer = document.querySelector(\"[data-list-display-container]\");\r\nconst listTitleElement = document.querySelector(\"[data-list-title]\");\r\nconst listCountElement = document.querySelector(\"[data-list-count]\");\r\nconst tasksContainer = document.querySelector(\"[data-tasks]\");\r\nconst taskTemplate = document.querySelector(\"#task-template\");\r\nconst newTaskForm = document.querySelector(\"[data-new-task-form]\");\r\nconst newTaskInput = document.querySelector(\"[data-new-task-input]\");\r\nconst newTaskDate = document.querySelector(\"#due-date\");\r\nconst newTaskPriority = document.querySelector(\"#priority\");\r\nconst newTaskDescription = document.querySelector(\"#description\");\r\nconst clearCompleteTasksButton = document.querySelector(\"[data-clear-complete-tasks-button]\");\r\nconst overlay = document.querySelector(\"#overlay\");\r\nconst formContainer = document.querySelector(\".container\");\r\nconst closeButton = document.querySelector(\".close\");\r\nconst addButton = document.querySelector(\".add-btn\");\r\nconst hamburger = document.querySelector(\".hamburger\");\r\n\r\nlet lists = JSON.parse(localStorage.getItem(\"task.lists\")) || [];\r\nlet selectedListId = localStorage.getItem(\"task.selectedListId\");\r\nlet modalOpen = false;\r\n\r\nfunction renderAndSave() {\r\n  render();\r\n  localStorage.setItem(\"task.lists\", JSON.stringify(lists));\r\n  localStorage.setItem(\"task.selectedListId\", selectedListId);\r\n}\r\n\r\nfunction clearElement(element) {\r\n    while (element.firstChild) {\r\n      element.removeChild(element.firstChild);\r\n    }\r\n  }\r\n\r\n  \r\nfunction renderTaskCount(selectedList) {\r\n    const incompleteTaskCount = selectedList.tasks.filter((task) => !task.complete).length;\r\n    const taskString = incompleteTaskCount === 1 ? \"task\" : \"tasks\";\r\n    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;\r\n  }\r\n  \r\n  function colorTasks(selectedList) {\r\n    const todos = [...document.querySelectorAll(\".todo\")];\r\n    const checkbox = [...document.querySelectorAll(\".checkbox\")];\r\n  \r\n    selectedList.tasks.forEach((task, index) => {\r\n      if (task.priority === \"High\") {\r\n        checkbox[index].style.border = \"2px solid #ed1250\";\r\n      } else if (task.priority === \"Medium\") {\r\n        checkbox[index].style.border = \"2px solid #d3d00f\";\r\n      } else {\r\n        checkbox[index].style.border = \"2px solid #0fc53d\";\r\n      }\r\n    });\r\n  }\r\n  \r\n  function render() {\r\n    clearElement(listsContainer);\r\n    renderLists();\r\n    const selectedList = lists.find((list) => list.id === selectedListId);\r\n  \r\n    if (selectedListId === null) {\r\n      listDisplayContainer.style.display = \"none\";\r\n    } else {\r\n      listDisplayContainer.style.display = \"\";\r\n      listTitleElement.innerHTML = `<i class=\"fas fa-tasks\"></i> ${selectedList.name}`;\r\n      renderTaskCount(selectedList);\r\n      clearElement(tasksContainer);\r\n      renderTasks(selectedList);\r\n      colorTasks(selectedList);\r\n    }\r\n  }\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
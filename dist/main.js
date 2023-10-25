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

eval("const listsContainer = document.querySelector(\"[data-lists]\");\r\nconst newListForm = document.querySelector(\"[data-new-list-form]\");\r\nconst newListInput = document.querySelector(\"[data-new-list-input]\");\r\nconst deleteListButton = document.querySelector(\"[data-delete-list-button]\");\r\nconst listDisplayContainer = document.querySelector(\"[data-list-display-container]\");\r\nconst listTitleElement = document.querySelector(\"[data-list-title]\");\r\nconst listCountElement = document.querySelector(\"[data-list-count]\");\r\nconst tasksContainer = document.querySelector(\"[data-tasks]\");\r\nconst taskTemplate = document.querySelector(\"#task-template\");\r\nconst newTaskForm = document.querySelector(\"[data-new-task-form]\");\r\nconst newTaskInput = document.querySelector(\"[data-new-task-input]\");\r\nconst newTaskDate = document.querySelector(\"#due-date\");\r\nconst newTaskPriority = document.querySelector(\"#priority\");\r\nconst newTaskDescription = document.querySelector(\"#description\");\r\nconst clearCompleteTasksButton = document.querySelector(\"[data-clear-complete-tasks-button]\");\r\nconst overlay = document.querySelector(\"#overlay\");\r\nconst formContainer = document.querySelector(\".container\");\r\nconst closeButton = document.querySelector(\".close\");\r\nconst addButton = document.querySelector(\".add-btn\");\r\nconst hamburger = document.querySelector(\".hamburger\");\r\n\r\nlet lists = JSON.parse(localStorage.getItem(\"task.lists\")) || [];\r\nlet selectedListId = localStorage.getItem(\"task.selectedListId\");\r\nlet modalOpen = false;\r\n\r\nfunction renderAndSave() {\r\n  render();\r\n  localStorage.setItem(\"task.lists\", JSON.stringify(lists));\r\n  localStorage.setItem(\"task.selectedListId\", selectedListId);\r\n}\r\n\r\nfunction clearElement(element) {\r\n    while (element.firstChild) {\r\n      element.removeChild(element.firstChild);\r\n    }\r\n  }\r\n\r\nfunction renderTaskCount(selectedList) {\r\n    const incompleteTaskCount = selectedList.tasks.filter((task) => !task.complete).length;\r\n    const taskString = incompleteTaskCount === 1 ? \"task\" : \"tasks\";\r\n    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;\r\n  }\r\n  \r\n  function colorTasks(selectedList) {\r\n    const todos = [...document.querySelectorAll(\".todo\")];\r\n    const checkbox = [...document.querySelectorAll(\".checkbox\")];\r\n  \r\n    selectedList.tasks.forEach((task, index) => {\r\n      if (task.priority === \"High\") {\r\n        checkbox[index].style.border = \"2px solid #ed1250\";\r\n      } else if (task.priority === \"Medium\") {\r\n        checkbox[index].style.border = \"2px solid #d3d00f\";\r\n      } else {\r\n        checkbox[index].style.border = \"2px solid #0fc53d\";\r\n      }\r\n    });\r\n  }\r\n  \r\n  function render() {\r\n    clearElement(listsContainer);\r\n    renderLists();\r\n    const selectedList = lists.find((list) => list.id === selectedListId);\r\n  \r\n    if (selectedListId === null) {\r\n      listDisplayContainer.style.display = \"none\";\r\n    } else {\r\n      listDisplayContainer.style.display = \"\";\r\n      listTitleElement.innerHTML = `<i class=\"fas fa-tasks\"></i> ${selectedList.name}`;\r\n      renderTaskCount(selectedList);\r\n      clearElement(tasksContainer);\r\n      renderTasks(selectedList);\r\n      colorTasks(selectedList);\r\n    }\r\n  }\r\n\r\n  function renderLists() {\r\n    lists.forEach((list) => {\r\n      const listElement = document.createElement(\"li\");\r\n      listElement.innerText = list.name;\r\n      listElement.dataset.listId = list.id;\r\n      if (list.id === selectedListId) {\r\n        listElement.classList.add(\"active-list\");\r\n      }\r\n      listsContainer.appendChild(listElement);\r\n    });\r\n  }\r\n  \r\n  function renderTasks(selectedList) {\r\n    if (selectedList.tasks.length === 0) {\r\n      listDisplayContainer.style.backgroundSize = \"35%\";\r\n    } else {\r\n      listDisplayContainer.style.background = \"\";\r\n    }\r\n  \r\n    selectedList.tasks.forEach((task) => {\r\n      const taskElement = document.importNode(taskTemplate.content, true);\r\n      const checkbox = taskElement.querySelector(\"input\");\r\n      checkbox.id = task.id;\r\n      checkbox.checked = task.complete;\r\n      const label = taskElement.querySelector(\"label\");\r\n      label.htmlFor = task.id;\r\n  \r\n      const lineBreak = document.createElement(\"br\");\r\n      label.append(task.name, \", \", task.date, lineBreak, task.description);\r\n      const editButton = document.createElement(\"p\");\r\n      editButton.innerHTML = `<i class=\"far fa-edit\"></i>`;\r\n      editButton.classList.add(\"edit\");\r\n      editButton.addEventListener(\"click\", () => editTask(task, label));\r\n      const todoTask = taskElement.querySelector(\".task\");\r\n      todoTask.append(editButton);\r\n      tasksContainer.appendChild(taskElement);\r\n    });\r\n  }\r\nfunction editTask(task, label) {\r\n    openOrCloseUpdateTaskForm();\r\n    newTaskInput.value = task.name;\r\n    newTaskDate.value = task.date;\r\n    newTaskPriority.value = task.priority;\r\n    newTaskDescription.value = task.description;\r\n  \r\n    newTaskForm.addEventListener(\"submit\", () => {\r\n      task.name = newTaskInput.value;\r\n      task.date = newTaskDate.value;\r\n      task.priority = newTaskPriority.value;\r\n      task.description = newTaskDescription.value;\r\n      label.innerHTML = `<span class=\"checkbox\"></span>${task.name}<br>${task.date}<br>${task.description}`;\r\n      renderAndSave();\r\n    });\r\n  }\r\n  \r\n  newListForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    const listName = newListInput.value;\r\n    if (listName === null || listName === \"\") return;\r\n    const list = createList();\r\n    newListInput.value = null;\r\n    lists.push(list);\r\n    renderAndSave();\r\n  });\r\n  \r\n  function createList() {\r\n    return { id: Date.now().toString(), name: newListInput.value, tasks: [] };\r\n  }\r\n\r\n  \r\n  newTaskForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    const taskName = newTaskInput.value;\r\n    const h2 = document.querySelector(\".container h2\");\r\n    if (h2.textContent === \"Update Task\") return;\r\n    if (taskName === null || taskName === \"\") return;\r\n    const task = createTask();\r\n    newTaskInput.value = null;\r\n    const selectedList = lists.find((list) => list.id === selectedListId);\r\n    selectedList.tasks.push(task);\r\n    renderAndSave();\r\n  });\r\n  \r\n  function createTask() {\r\n    return {\r\n      id: Date.now().toString(),\r\n      name: newTaskInput.value,\r\n      date: newTaskDate.value,\r\n      priority: newTaskPriority.value,\r\n      description: newTaskDescription.value,\r\n      complete: false,\r\n    };\r\n  }\r\n\r\n  deleteListButton.addEventListener(\"click\", (e) => {\r\n    lists = lists.filter((list) => list.id !== selectedListId);\r\n    selectedListId = null;\r\n    renderAndSave();\r\n  });\r\n  \r\n  clearCompleteTasksButton.addEventListener(\"click\", (e) => {\r\n    const selectedList = lists.find((list) => list.id === selectedListId);\r\n    selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);\r\n    renderAndSave();\r\n  });\r\n\r\n  function openOrCloseAddTaskForm() {\r\n    const h2 = document.querySelector(\".container h2\");\r\n    const submitInput = document.querySelector(`input[type=\"submit\"]`);\r\n  \r\n    if (modalOpen) {\r\n      formContainer.style.pointerEvents = \"none\";\r\n      formContainer.style.transform = \"scale(0)\";\r\n      overlay.style.opacity = 0;\r\n      modalOpen = false;\r\n    } else {\r\n      h2.textContent = \"New Task\";\r\n      submitInput.value = \"Submit\";\r\n      formContainer.style.pointerEvents = \"auto\";\r\n      formContainer.style.transform = \"scale(1)\";\r\n      overlay.style.opacity = 1;\r\n      modalOpen = true;\r\n    }\r\n  }\r\n\r\n  function openOrCloseUpdateTaskForm() {\r\n    const h2 = document.querySelector(\".container h2\");\r\n    const submitInput = document.querySelector(`input[type=\"submit\"]`);\r\n  \r\n    if (modalOpen) {\r\n      formContainer.style.pointerEvents = \"none\";\r\n      formContainer.style.transform = \"scale(0)\";\r\n      overlay.style.opacity = 0;\r\n      modalOpen = false;\r\n    } else {\r\n      h2.textContent = \"Update Task\";\r\n      submitInput.value = \"Update\";\r\n      formContainer.style.pointerEvents = \"auto\";\r\n      formContainer.style.transform = \"scale(1)\";\r\n      overlay.style.opacity = 1;\r\n      modalOpen = true;\r\n    }\r\n  }\r\n\r\n  function closeModal() {\r\n    formContainer.style.transform = \"scale(0)\";\r\n    overlay.style.opacity = 0;\r\n    modalOpen = false;\r\n  }\r\n  \r\n  listsContainer.addEventListener(\"click\", (e) => {\r\n    if (e.target.tagName.toLowerCase() === \"li\") {\r\n      selectedListId = e.target.dataset.listId;\r\n      renderAndSave();\r\n    }\r\n  });\r\n  \r\n  tasksContainer.addEventListener(\"click\", (e) => {\r\n    if (e.target.tagName.toLowerCase() === \"input\") {\r\n      const selectedList = lists.find((list) => list.id === selectedListId);\r\n      const selectedTask = selectedList.tasks.find(\r\n        (task) => task.id === e.target.id\r\n      );\r\n      selectedTask.complete = e.target.checked;\r\n      renderAndSave();\r\n    }\r\n  });\r\n\r\n  addButton.addEventListener(\"click\", () => {\r\n    newTaskForm.reset();\r\n    openOrCloseAddTaskForm();\r\n  \r\n    if (modalOpen) {\r\n      addButton.style.background = \"#2185d5\";\r\n      addButton.style.transform = \"rotate(45deg)\";\r\n    } else {\r\n      addButton.style.background = \"transparent\";\r\n      addButton.style.transform = \"rotate(0)\";\r\n    }\r\n  });\r\n  \r\n  closeButton.addEventListener(\"click\", () => {\r\n    closeModal();\r\n    addButton.style.background = \"transparent\";\r\n    addButton.style.transform = \"rotate(0)\";\r\n  });\r\n  \r\n  formContainer.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    openOrCloseAddTaskForm();\r\n    addButton.style.background = \"transparent\";\r\n    addButton.style.transform = \"rotate(0)\";\r\n    modalOpen = false;\r\n  });\r\n  \n\n//# sourceURL=webpack://todo_list/./src/index.js?");

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
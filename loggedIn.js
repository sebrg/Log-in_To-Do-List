window.addEventListener("load", initSite)
document.getElementById("todoBtn").addEventListener("click", newToDo)
document.getElementById("logoutBtn").addEventListener("click", logOut)


/* page is loaded, if not logged in, redirect to login page */
function initSite() {
    console.log("page is loaded")

    const successLogin = sessionStorage.getItem("successLogin")

    if(!successLogin) {
        window.location = "index.html"
    }
}

printToDo()

/* Function for printing a new "To Do" */
function newToDo() {
    let printNew = document.getElementById("toDo").value
   
    let todoList = []

    let storagedList = localStorage.getItem("todoList")

    if(storagedList) {
        todoList = JSON.parse(storagedList)
         
    }

    todoList.push(printNew)
    localStorage.setItem("todoList", JSON.stringify(todoList))
    
    removeItem()
    printToDo()
}
/* Function for the container, creating a list and saving to localstorage */
function printToDo() {
    let container = document.getElementById("container")
    container.innerHTML = " " 

    let todoList = localStorage.getItem("todoList")
   

    todoList = JSON.parse(todoList)

    for(let i = 0; i < todoList.length; i++) {
        let todo = todoList[i]
  
        let closeIcon = document.createElement("icon")
        closeIcon.classList = "fas fa-times"
             
        let listItem = document.createElement("div")
        listItem.innerText = todo
        listItem.classList = "ToDoItem"
       
        listItem.appendChild(closeIcon)
        container.appendChild(listItem)

    }
        
}

/* logout button */
function logOut() {
    sessionStorage.removeItem("successLogin")
    window.location = "index.html"
}
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




/* Function for printing a new "To Do" */
function newToDo() {
    let currentUser = sessionStorage.getItem("successLogin") 
    let todoList = localStorage.getItem("userList")
    todoList = JSON.parse(todoList)

    for(let i = 0; i < todoList.length; i++) {
        let todo = todoList[i]
        
        if(currentUser == todoList[i].name) { 
        let printNew = document.getElementById("toDo").value
        todo.todos.push(printNew)
        localStorage.setItem("userList", JSON.stringify(todoList))
        window.location = "mypage.html" 
    } 
       
}
}    printToDo()

/* Function for the container, creating a list and saving to localstorage */
function printToDo() {
    let currentUser = sessionStorage.getItem("successLogin") 
    let container = document.getElementById("container")
    container.innerHTML = " " 
    
    let todoList = localStorage.getItem("userList")
    todoList = JSON.parse(todoList)
   
    for(let i = 0; i < todoList.length; i++) {
        let todo = todoList[i].todos

    /* renderar ut en unik(efter användare) array om currentuser stämmer med namn*/   
        if(currentUser == todoList[i].name) { 

        for (let i = 0; i < todo.length; i++) {
                    
        let closeIcon = document.createElement("icon")
        closeIcon.classList = "fas fa-times"
       // tänkte göra en funktion som tar bort när man klickar på iconen
   
        let listItem = document.createElement("div")
        listItem.classList = "ToDoItem"

        let todoText = document.createElement("h6")
        todoText.innerText = todo[i]
       
        listItem.appendChild(todoText)
        listItem.appendChild(closeIcon)
        container.appendChild(listItem)
    }   
    }    
   }    
   
}



/* logout button */
function logOut() {
    sessionStorage.removeItem("successLogin")
    window.location = "index.html"
}

window.addEventListener("load", initSite)
document.getElementById('loginButton').addEventListener("click", login)
document.getElementById("registerButton").addEventListener("click", regUser)

/* page is loaded, if login = success, gets redirected to loginpage */
function initSite() {
    console.log("page is loaded")

    

    const successLogin = sessionStorage.getItem("successLogin")
    
    if(successLogin) {
        window.location = "mypage.html"
    }
}


function getUserList() {
    let userList = localStorage.getItem("userList")
    /* creating a list if there is none */
    if(userList == null) {
         userList = []
}   else  {
    userList = JSON.parse(userList)
}
    return userList
}
/* Save array to localstorage */
function saveUserList(saveUserList) {
    localStorage.getItem("userList",JSON.stringify(saveUserList))
}

/* function for regging users, pushes a new "person" to the userList in localstorage. */
function regUser() {
    let regUsername = document.getElementById("registerUsername").value
    let regPassword = document.getElementById("registerPassword").value

    let newUser = getUserList()
    let newAcc = {
        name: regUsername,
        password: regPassword
    }
    newUser.push(newAcc)
    localStorage.setItem("userList", JSON.stringify(newUser))
    saveUserList(newUser)
    
}
/* Checking if the username & password exist, returning true or false */
function checkUser(nameToCheck, passwordtoCheck) { 
    let myList = getUserList() 
    
    myListName = false
    for(i = 0; i < myList.length; i++){
        if(nameToCheck == myList[i].name && passwordtoCheck == myList[i].password) {
            myListName = true
        }
    }
    return myListName
}

/* Login-function, fetches value from login-inputs, calling checkUser, if a match = successLogin */
function login() {
    let userName = document.getElementById("signinUsername").value
    let userPass = document.getElementById("signinPassword").value
    checkUser(userName, userPass)
      if (myListName == true) {
         sessionStorage.setItem("successLogin", userName) 
        window.location = "mypage.html"
        
      } else {
        alert('Invalid login!');
       
      }
    }
  

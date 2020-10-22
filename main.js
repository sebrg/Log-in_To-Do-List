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
    if(userList == null) {
        userList = []
}   else  {
    userList = JSON.parse(userList)
}
    return userList
}

function saveUserList(saveUserList) {
    localStorage.getItem("userList",JSON.stringify(saveUserList))
}


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
  

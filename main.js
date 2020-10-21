window.addEventListener("load", initSite)
document.getElementById('loginButton').addEventListener("click", login)
document.getElementById("registerButton").addEventListener("click", registerUser)

/* page is loaded, if login = success, gets redirected to loginpage */
function initSite() {
    console.log("page is loaded")

    

    const successLogin = sessionStorage.getItem("successLogin")
    
    if(successLogin) {
        window.location = "mypage.html"
    }
}


let users = [{
    username: "test",
    password: "test"
}]

function login() {
   /* Gets the value from the inputs */ 
    const usernameToCheck = document.getElementById("signinUsername").value
    const passwordToCheck = document.getElementById("signinPassword").value
    
    /* saves the array/for-loop in localstorage */ 
    localStorage.setItem("userList", JSON.stringify(users))

    /* Loop is checking if username/password from array matches */ 
    for (let i = 0; i < users.length; i++) {
        if(usernameToCheck == users[i].username && passwordToCheck == users [i].password){
            sessionStorage.setItem("successLogin", usernameToCheck)
            window.location = "mypage.html"
            return
        }
        else {
            alert("Fel lösenord eller användarnamn")
        } 
    }   
    
}

/* register a new user & push the new user to the array */ 
function registerUser() {
    let regUsername = document.getElementById("registerUsername").value
    let regPassword = document.getElementById("registerPassword").value
    
    let newUser = {
            username: regUsername,
            password: regPassword
    }
         for (let i = 0; i < users.length; i++) {
        localStorage.getItem("userList")
             if(regUsername == users[i].username) {
                alert("That username is already taken")
                return    
             }
         } 

        users.push(newUser)
        localStorage.setItem("userList", JSON.stringify(users))
        
}

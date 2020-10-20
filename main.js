window.addEventListener("load", initSite)
document.getElementById('loginButton').addEventListener("click", check)

/* page is loaded, if login = success, gets redirected to loginpage */
function initSite() {
    console.log("page is loaded")

    const successLogin = sessionStorage.getItem("successLogin")

    if(successLogin) {
        window.location = "mypage.html"
    }
}

/* Function for checking username & password, if correct redirect and save logged in user to session storage */
function check() {
    
    let users = [{
        username: "testuser",
        password: "testpw"
    }

    ]

    for (let i = 0; i < users.length; i++) {
        const usernameToCheck = document.getElementById("signinUsername").value
        const passwordToCheck = document.getElementById("signinPassword").value
       
        if(usernameToCheck == users[i].username && passwordToCheck == users [i].password) {
            sessionStorage.setItem("successLogin", usernameToCheck)
            window.location = "mypage.html"
            
        }

        else {
            alert("Fel lösenord eller användarnamn")
            
        }
        
    }
}







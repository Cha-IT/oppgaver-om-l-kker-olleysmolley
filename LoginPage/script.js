const users = [
    {username: "olley", password: "stayCunty", passAttempts: 0}
]

const loginBtn = document.getElementById("loginBtn")
const signinBtn = document.getElementById("signinBtn")

const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")


signinBtn.onclick = function() {
    // Check if any account with same username
    for (let i = 0; i < users.length; i++) {
        const user = users[i]
        console.log(user)
        if (user.username == usernameInput.value) {
            alert("username taken dumbass")
            return
        }
    }

    // checks if the password includes at least on special character and at least one number
    if (/\d/.test(passwordInput.value) && /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value)) {
        alert("QUEEF")
    }
    else {
        alert("Password must include at least one: number, special character")
        return
    }

    users.push({username: usernameInput.value, password: passwordInput.value, passAttempts: 0})
}

loginBtn.onclick = function() {
    for (let i = 0; i < users.length; i++) {
        const user = users[i]
        console.log(user)
        
        if (usernameInput.value == user.username) {
            if (user.passAttempts >= 3) {
                alert("Account on lock. To many attempts.")
                return
            }

            if (passwordInput.value == user.password) {
                alert("Logged in as: " + user.username)
                return
            }
            user.passAttempts += 1
            alert("wrong password")
            return
        }
    }
    alert("no user with name: " + usernameInput.value)
}
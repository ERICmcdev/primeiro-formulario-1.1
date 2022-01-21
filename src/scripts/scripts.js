const viewAndNotViewPasswordButton = document.querySelector(".view-password-button--registration--page")
const passwordInput = document.getElementById("password-registration-page")

const viewAndNotViewPasswordButtonSecond = document.querySelector(".view-password-button--registration--page--second")
const passwordInputSecond = document.getElementById("password-registration-page--second")

const viewAndNotView = () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        viewAndNotViewPasswordButton.src = "/src/images/notVisibility.png";
    } else {
        passwordInput.type = "password"
        viewAndNotViewPasswordButton.src = "/src/images/visibility.png"
    }
}

const viewAndNotViewSecond = () => {
    if (passwordInputSecond.type === "password") {
        passwordInputSecond.type = "text"
        viewAndNotViewPasswordButtonSecond.src = "/src/images/notVisibility.png";
    } else {
        passwordInputSecond.type = "password"
        viewAndNotViewPasswordButtonSecond.src = "/src/images/visibility.png"
    }
}

viewAndNotViewPasswordButton.addEventListener("click", function () {
    viewAndNotView()
})

viewAndNotViewPasswordButtonSecond.addEventListener("click", function () {
    viewAndNotViewSecond()
})

//ta com um bug na pagina de login, no view and not view, vou resolver dia 21/01/2022 hoje é 20/01/2022 21:12 hrs, boa noite!




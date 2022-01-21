const viewAndNotViewPasswordButtonLoginPage = document.querySelector(".view-password-button--login--page")
const passwordInputLoginPage = document.getElementById("password-login-page")


const viewAndNotViewLogin = () => {
    if (passwordInputLoginPage.type === "password") {
        passwordInputLoginPage.type = "text"
        viewAndNotViewPasswordButtonLoginPage.src = "/src/images/notVisibility.png";
    } else {
        passwordInputLoginPage.type = "password"
        viewAndNotViewPasswordButtonLoginPage.src = "/src/images/visibility.png";
    }
}


viewAndNotViewPasswordButtonLoginPage.addEventListener("click", function () {
    viewAndNotViewLogin()
})
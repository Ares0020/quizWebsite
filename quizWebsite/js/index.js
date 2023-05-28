const p = console.log;

const logIn = document.querySelector(".login");
const signup = document.querySelector(".signup");
const modal = document.querySelector(".modal__container");
const userRole = document.querySelectorAll(".modal__container .box");

logIn.addEventListener("click", () => {
    modal.style.transform = "translateY(0)";
    p(window.location.href)
})


signup.addEventListener("click", () => {
    modal.style.transform = "translateY(0)";
})

modal.addEventListener("click", () => {
    modal.style.transform = "translateY(-100%)";
})
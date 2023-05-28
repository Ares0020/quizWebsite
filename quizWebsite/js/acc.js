const p = console.log;

const switchBtn = document.querySelectorAll('.switch span')
const signUp = document.querySelector('.SignUp')
const logIn = document.querySelector('.logIn')

switchBtn[0].addEventListener("click", () => {
    signUp.style.transform = "translateX(-100%)"
    logIn.style.transform = "translateX(-100%)"
    
})
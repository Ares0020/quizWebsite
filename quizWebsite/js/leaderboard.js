const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener('click',() => {
    console.log("HIi")
  dropdownContent.classList.toggle('show');
});

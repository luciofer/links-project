const toggleButton = document.querySelector("#switch")
const htmlTag = document.querySelector("html")
const img = document.querySelector("#profile img")

toggleButton.addEventListener('click', (event) => {
    event.preventDefault();

    htmlTag.classList.toggle('light')

    if (htmlTag.classList.contains('light')){
        img.setAttribute("src", "./assets/avatar-light.jpg")
    } else {
        img.setAttribute("src", "./assets/avatar-dark.jpg")
    }

})
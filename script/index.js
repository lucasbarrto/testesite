let header = document.querySelector(".header")
let headerMobile = document.querySelector(".headerMobile")
let botaoMobile = document.querySelector(".menuBars")

botaoMobile.addEventListener("click", () => {
header.style.display = "none"
headerMobile.style.display = "flex"
let fecharMenu = document.querySelector(".menuCLose")
fecharMenu.addEventListener("click", () => {
    header.style.display = "flex"
    headerMobile.style.display = "none"
})
})


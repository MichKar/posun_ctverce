let square = document.querySelector(".square")

newTop = 100
newLeft = 200

document.body.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        newTop = newTop - 10
        square.style.top = newTop + "px"
    } else if (e.key === "ArrowDown") {
        newTop = newTop + 10
        square.style.top = newTop + "px"
    } else if (e.key === "ArrowLeft") {
        newLeft = newLeft - 10
        square.style.left = newLeft + "px"
    } else if (e.key === "ArrowRight") {
        newLeft = newLeft + 10
        square.style.left = newLeft + "px"
    }
})
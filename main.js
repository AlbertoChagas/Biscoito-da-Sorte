const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


// function Callback

function handleTryClick(event) {
  event.preventDefault()
  screen1.classList.add("hide")
  screen2.classList.remove("hide")
}

// Events



btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", function() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
})

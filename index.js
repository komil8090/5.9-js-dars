let btn = document.querySelector("button")
let id = document.querySelector(".imput1")
let pass = document.querySelector(".imput2")

btn.addEventListener("click", function (event) {
    event.preventDefault();

    if (id.value === "1234" && pass.value === "1234") {
        alert("Kridingiz")
    } else {
        alert("kirolmadingiz")
    }
})


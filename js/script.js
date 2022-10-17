const wave1 = document.querySelector("#wave1");
const wave2 = document.querySelector("#wave2");
window.addEventListener("scroll", () => {
    let pix = window.pageYOffset
    let a = -860 + pix
    wave1.style = `transform:rotate(45deg) translate(${a}px, 0px);`;
    let b = 200 + pix
    wave2.style = `transform:rotate(-135deg) translate(${b}px, 0px);`;
});
const display = document.querySelector("#display");
const calculatorDigit = document.querySelectorAll(".calculatorDigit");
calculatorDigit.forEach((dig) => {
    dig.addEventListener("click", () => {
        if (dig.id === 'c') {
            display.innerText = ""
        }
        else if (dig.id === 'back') {
            display.innerText = display.innerText.slice(0, -1)
        }
        else if (dig.id === 'equal') {
            display.innerText = eval(display.innerText)
        }
        else {
            display.innerText += dig.innerText
        }
    })
})

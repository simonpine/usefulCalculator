const wave1 = document.querySelector("#wave1");
const wave2 = document.querySelector("#wave2");
const del = document.querySelector("#delete");
const input = document.querySelector(".res");
window.addEventListener("scroll", () => {
    let pix = window.pageYOffset
    let a = -860 + pix
    wave1.style = `transform:rotate(45deg) translate(${a}px, 0px);`;
    let b = 200 + pix
    wave2.style = `transform:rotate(-135deg) translate(${b}px, 0px);`;
});
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function generateDate() {
    const d = new Date();
    const month = months[d.getMonth()];
    const day = d.getDate();
    let date = month + ' ' + day
    return date
}
class card {
    constructor (date, ecuation) {
        this.date = date;
        this.ecuation = ecuation
    }
}
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
            if((eval(display.innerText) === undefined)){
                display.innerText = 'error'
            }
            else if((eval(display.innerText) === Infinity)){
                display.innerText = 'error'
            }
            else{
            const preText = display.innerText
            display.innerText = eval(display.innerText)
            const posText = display.innerText
            const result = preText + ' = ' + posText
            const cardNew = new card(generateDate(), result);
            const cardJason = JSON.stringify(cardNew);
            localStorage.setItem(`card${localStorage.length}`, cardJason)
            }
        }
        else {
            display.innerText += dig.innerText
        }
    })
})

del.addEventListener('click', () => {
    localStorage.clear()
        input.innerHTML = ''
})
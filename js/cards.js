const equal = document.querySelector("#equal");
const Input = document.querySelector(".res");
let cards = []
function setCards() {
    cards = []
    for (i = 0; i < (localStorage.length); i++) {
        let newCardJason = localStorage.getItem(`card${i}`)
        let cardNew = JSON.parse(newCardJason)
        cards.push(cardNew)
    }
    console.log(cards)
    for (h of cards) {
        const newApendCard = document.createElement("div");
        newApendCard.innerHTML = `
            <div class="card">
            <h4 class="day">${h.date}</h4>
            <button class="button_ret">${h.ecuation}</button>
            </div>
            `
        Input.append(newApendCard)
    }
    const display2 = document.querySelector("#display");
    const butRe = document.querySelectorAll(".button_ret");
    butRe.forEach((dig) => {
        dig.addEventListener("click", () => {
            const reInt = dig.innerText.split(' ')
            display2.innerText = reInt[2]
        })
    })
}
setCards()
equal.addEventListener('click', () => {
    Input.innerHTML = ''
    setCards()
})

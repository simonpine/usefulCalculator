const equal = document.querySelector("#equal");
const Input = document.querySelector(".res");
let cards = []
function setCards() {
    setTimeout(()=>{
        cards = []
        for(i = 0; i < (localStorage.length); i++){
            let newCardJason = localStorage.getItem(`card${i}`)
            let cardNew = JSON.parse(newCardJason)
            cards.push(cardNew)
        }
        console.log(cards)
        for(h of cards){
            const newApendCard = document.createElement("div");
            newApendCard.innerHTML = `
            <div class="card">
            <h4 class="day">${h.date}</h4>
            <h3>${h.ecuation}</h3>
            </div>
            `
            Input.append(newApendCard)
        }},1000)
}
setCards()
equal.addEventListener('click', ()=>{
    Input.innerHTML = ''
    setCards() 
})
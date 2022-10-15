const wave1 = document.querySelector("#wave1");
const wave2 = document.querySelector("#wave2");
window.addEventListener("scroll", ()=>{
    let pix = window.pageYOffset
    let a = -860 + pix   
    console.log(a)
    wave1.style = `transform:rotate(45deg) translate(${a}px, 0px);`;
    let b = 200 + pix
    wave2.style = `transform:rotate(-135deg) translate(${b}px, 0px);`;
});
const soleil = document.querySelector('.soleil');
soleil.addEventListener("mouseover", ()=>{
    soleil.src = "../public/interieur-soleil.png"
})
soleil.addEventListener("mouseout", ()=>{
    soleil.src = "../public/Soleil.png"
})
const mercure = document.querySelector('.mercure');
mercure.addEventListener("mouseover", ()=>{
    mercure.src = "../public/interieur-mercure.png"
})
mercure.addEventListener("mouseout", ()=>{
    mercure.src = "../public/Mercure.png"
})
const venus = document.querySelector('.venus');
venus.addEventListener("mouseover", ()=>{
    venus.src = "../public/interieur-venus.png"
})
venus.addEventListener("mouseout", ()=>{
    venus.src = "../public/Venus.png"
})
const terre = document.querySelector('.terre');
terre.addEventListener("mouseover", ()=>{
    terre.src = "../public/interieur-terre.png"
})
terre.addEventListener("mouseout", ()=>{
    terre.src = "../public/Terre.png"
})
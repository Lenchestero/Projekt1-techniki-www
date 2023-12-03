/*
var d = document.getElementById("dinozaury_triasu")
d.innerHTML ="<h1>Tekst</h1>";*/


let dinozaury=[];
dinozaury=[new Dinozaur("zdjecia/kompsognatin.png","kompsognat","teropod", "40cm", "1m", "Niemcy","Padlinożerca" ), new Dinozaur("zdjecia/stegazourin.png","Azylozaur","Zauropodomorf","1,8m","2m","Anglia","Roślinożerca")];
for(let i=0;i<dinozaury.length;i++)
{
    document.write(`<div class="dinozaury">`);
    document.write(`<div class="dinozaury_specyfikacje ruch"><img src="${dinozaury[i].zdjecie}"></div>`);
    document.write(`<div class="dinozaury_specyfikacje "><b>Nazwa</b>: ${dinozaury[i].nazwa}<br><b> Typ:</b> ${dinozaury[i].typ}<br><b>Wzrost:</b> ${dinozaury[i].wzrost}<br><b>Długość:</b> ${dinozaury[i].dlugosc}<br><b>Kraj występowania:</b> ${dinozaury[i].miejsce}<br><b>Typ pożywienia:</b> ${dinozaury[i].jedzenie}<br></div>`);
    document.write(`</div>`);
}

console.log("dahsh");
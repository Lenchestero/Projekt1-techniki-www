let dinozaury3=[];
dinozaury3=[new Dinozaur("zdjecia/velociraptorin.png","velociraptor","teropod", "1m", "2m", "Chiny, Mongolia","Mięsożerca, padlinożerca" ), new Dinozaur("zdjecia/stegazourin.png","Azylozaur","Zauropodomorf","1,8m","2m","Anglia","Roślinożerca")];
for(let i=0;i<dinozaury3.length;i++)
{
    document.write(`<div class="dinozaury">`);
    document.write(`<div class="dinozaury_specyfikacje ruch"><img src="${dinozaury3[i].zdjecie}"></div>`);
    document.write(`<div class="dinozaury_specyfikacje "><b>Nazwa</b>: ${dinozaury3[i].nazwa}<br><b> Typ:</b> ${dinozaury3[i].typ}<br><b>Wzrost:</b> ${dinozaury3[i].wzrost}<br><b>Długość:</b> ${dinozaury3[i].dlugosc}<br><b>Kraj występowania:</b> ${dinozaury3[i].miejsce}<br><b>Typ pożywienia:</b> ${dinozaury3[i].jedzenie}<br></div>`);
    document.write(`</div>`);
}
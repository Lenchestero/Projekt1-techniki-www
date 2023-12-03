let dinozaury2=[];
dinozaury2=[new Dinozaur("zdjecia/stegazourin.png","Stegozaur","tyreofory", "4m", "6-9m", "USA, Portugalia","Roślinożerca" ), new Dinozaur("zdjecia/allosaurin.png","Allozaur","teropod","8,5m","10m","USA, Portugalia","Mięsożerca")];
for(let i=0;i<dinozaury2.length;i++)
{
    document.write(`<div class="dinozaury">`);
    document.write(`<div class="dinozaury_specyfikacje ruch"><img src="${dinozaury2[i].zdjecie}"></div>`);
    document.write(`<div class="dinozaury_specyfikacje "><b>Nazwa</b>: ${dinozaury2[i].nazwa}<br><b> Typ:</b> ${dinozaury2[i].typ}<br><b>Wzrost:</b> ${dinozaury2[i].wzrost}<br><b>Długość:</b> ${dinozaury2[i].dlugosc}<br><b>Kraj występowania:</b> ${dinozaury2[i].miejsce}<br><b>Typ pożywienia:</b> ${dinozaury2[i].jedzenie}<br></div>`);
    document.write(`</div>`);
}
/*obserwuje jak skroluje się między dinozaurami i robi animacje*//*
console.log("start");
let observer=new IntersectionObserver((dino,observer)=>{
    dino.filter(e=>e.isIntersecting).forEach(obiekt=>{
        obiekt.target.classList.add("schowany");
        observer.unobserve(obiekt.target);
    });
});
console.log("main");

const options={
    threshold:0.8,
};

    document.querySelectorAll('dinozaury_specyfikacje').forEach(e=>{
            observer.observe(e)
        });
        
        console.log("end");*/

const the_animation = document.querySelectorAll('.ruch')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('schowane')
        }
    })
},
    { threshold: 0.8
    });
//
    for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
    } 

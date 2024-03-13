let nav=document.querySelector(".main-nav-container");
let HomePage=document.querySelector(".HomePage");
let servecisPage=document.querySelector(".servecisPage");
let exp=document.querySelector(".exp");
let hireMe=document.querySelector(".hireMe");
let myPortfolio=document.querySelector(".myPortfolio");
let recommendations=document.querySelector(".recommendations");
let contact=document.querySelector(".contact");
let copyright=document.querySelector(".copyright");



console.log(HomePage.offsetTop);
window.addEventListener("load",function(){
    nav.children[3].classList.add("selected");
})
window.onscroll=function(){
    Array.from(nav.children).forEach(e => {
        e.classList.remove("selected");
    });
    if(window.scrollY+100>=HomePage.offsetTop&&window.scrollY+100<servecisPage.offsetTop){
        nav.children[0].classList.add("selected");
    }
    else if(window.scrollY+100>=servecisPage.offsetTop&&window.scrollY+100<exp.offsetTop){
        nav.children[2].classList.add("selected");
    }
    else if(window.scrollY+100>=exp.offsetTop&&window.scrollY+100<hireMe.offsetTop){
        nav.children[4].classList.add("selected");
    }
    else if(window.scrollY+100>=hireMe.offsetTop&&window.scrollY+100<myPortfolio.offsetTop){
        nav.children[1].classList.add("selected");
    }
    else if(window.scrollY+100>=myPortfolio.offsetTop&&window.scrollY+100<recommendations.offsetTop){
        nav.children[5].classList.add("selected");
    }
    else if(window.scrollY+100>=recommendations.offsetTop&&window.scrollY<contact.offsetTop){
        nav.children[3].classList.add("selected");
    }
    else if(window.scrollY+100>=contact.offsetTop&&window.scrollY<copyright.offsetTop){
        nav.children[6].classList.add("selected");
    }
    else{
        nav.children[0].classList.add("selected");
    }
}


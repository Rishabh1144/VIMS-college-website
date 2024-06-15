//.............................main crousel....................................//

const bg = document.querySelectorAll('.bgimg');
var cnt = 0;

for(let i=0; i<bg.length; i++){
    
    bg[i].style.left = `${i * 100}%`;
    
}

function prev() {
    if(cnt==0){
        cnt=bg.length-1;
    }
    else{
        cnt--;
    }
    slideImage()
}

function next() {
    if(cnt==bg.length-1){
        cnt=0;
    }
    else{
        cnt++;
    }
    slideImage()
}

slideImage = () =>{
    for(let i=0; i<bg.length; i++){
        
        bg[i].style.transform = `translateX(-${cnt * 100}%)`;

    }
}

setInterval(() =>{
    next()
}, 6000);


//............................placement crousel..............................//


const std = document.querySelectorAll('.std');
var s=0;
var sDelay = 3000;

for(let i=0; i<std.length; i++){
    
    std[i].style.bottom = `${i * 100}%`;
    
}

function placement() {
    if(s==std.length-1){
        s=0;
        for(let i=0; i<std.length; i++){
            std[i].style.transition = "none";
        }
    }
    else{
        s++;
        for(let i=0; i<std.length; i++){
            std[i].style.transition = ".5s linear";
        }
    }
    placementSlide()
}

const placementSlide = () =>{
    for(let i=0; i<std.length; i++){
        
        std[i].style.transform = `translateY(${s * 100}%)`;

    }
}
setInterval(() =>{
    placement()
}, sDelay);



// ...........................department heads section ...............................//



// const heads = document.querySelectorAll('.head');

// function hide(pass){
//     for(let i=0; i<heads.length; i++){
//         heads[i].style.filter = "blur(3px)";
//         var ele = document.getElementById(pass);
//         ele.style.filter = "none";
//     }
// }

// function show(){
//     for(let i=0; i<heads.length; i++){
//         heads[i].style.filter = "none";
//     }
// }



// ........................scroll-up btn................................//


const scrollUp = document.getElementById('scroll-up');

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 400){
        scrollUp.style.display = "block";
    }
    else{
        scrollUp.style.display = "none";
    }
});
 
scrollUp.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior:"smooth"});
})


// ...........................sticky navbar................................//


const header = document.querySelector('header');
var ancment = document.querySelector('.announcement');
var logoImg = document.getElementById('logoImg');
var logoTxt = document.getElementById('logoTxt');
const main = document.querySelector('main');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 220){
        ancment.style.display = "none";
        main.style.marginTop = "0";
        logoImg.style.width = "50px";
        logoTxt.style.fontSize = ".5rem";
        logoImg.style.top = "2.6rem";
        logoTxt.style.top = "2rem";
        header.style.position = "fixed";
        header.style.top = "-5.6rem";

    }
    else{
        ancment.style.display = "flex";
        main.style.marginTop = "2.1%";
        logoImg.style.width = "80px";
        logoTxt.style.fontSize = ".9rem";
        logoImg.style.top = "0";
        logoTxt.style.top = "0";
        header.style.position = "static";
    }
});
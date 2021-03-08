let meImage = document.querySelector('.photo-container')
let message = document.querySelector('.info-text');
let secMess = document.querySelector('.second-text')
let homeBtn = document.querySelector('#homeBtn')
let abtBtn = document.querySelector('#aboutMeBtn')
let hbtBtn = document.querySelector('#habilitiesBtn')
let pryBtn = document.querySelector('#projectsBtn')
let ctcBtn = document.querySelector('#contactBtn')
let eduBtn = document.querySelector('#educationBtn')
let fwrdBtn = document.querySelector('#forwardBtn')
let backBtn = document.querySelector('#backBtn')
let slider = document.querySelector(".sliding-show")
let habTitt = document.querySelector('.tittle-appear1')
let header = document.querySelector('header')
let projects = document.querySelector('.projects-container')
let projectsct = document.querySelector('#projects')

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        showPhoto(meImage);
        showTextDoub(message, secMess);
    }else{
        turnAbtMeHidden();
    }
    if(window.scrollY > 1050){
        showText(habTitt);
    }else{
        turnHidden(habTitt);
    }
    if(window.scrollY > 2000){
        showItem(projects);
    }else{
        turnHiddenSlow(projects)
    }
    if(window.scrollY > 2488){
        spaceChange(header);
    }else{
        header.style.background = "var(--col1)";
    }
    if(window.scrollY > 3214){
        header.style.background = "var(--col1)"
    }
});

projectsct.addEventListener('scroll', () => {console.log('hola')})

homeBtn.addEventListener('click',() =>{
    window.scrollTo(window.scrollTo( 0, 0 ))
})
abtBtn.addEventListener('click',() =>{
    window.scrollTo(window.scrollTo( 0, 806 ))
})
hbtBtn.addEventListener('click',() =>{
    window.scrollTo(window.scrollTo( 0, 1806 ))
})
pryBtn.addEventListener('click',() =>{
    window.scrollTo(window.scrollTo( 0, 2489))
})
eduBtn.addEventListener('click',() =>{
    window.scrollTo(window.scrollTo( 0, 3231))
})
ctcBtn.addEventListener('click',() =>{
    window.scrollTo(window.scrollTo( 0, 9000 ))
})

let slidesCount = 0;
let counter = 0;

fwrdBtn.addEventListener('click',() => {
    if(slidesCount < slider.childElementCount-2 && slidesCount >= 0){
        counter -= 33;
        slider.style.transform = `translateX(${counter}%)`;
        slidesCount++
        console.log('slide count =', slidesCount)
    }
})
backBtn.addEventListener('click',() => {
    if(slidesCount <= slider.childElementCount-2 && slidesCount > 0){
        counter += 33;
        slider.style.transform = `translateX(${counter}%)`;
        slidesCount--
        console.log('slide count =', slidesCount)
    }
})

// PREPARED FUNCTIONS

function showPhoto(obj){
    obj.classList.replace('hidden', 'showing');
}
function showTextDoub(mssgobj, scndText){
    mssgobj.classList.replace('hidden-slide-right', 'showing');
    setTimeout(() => {
        scndText.classList.replace('hidden', 'showing');
    }, 100)
}
function showItem(item){
    item.classList.replace('hidden', 'showing-slow')
}
function showText(mssg){
    mssg.classList.replace('hidden', 'showing')
}
function turnAbtMeHidden(){
    message.classList.replace('showing', 'hidden-slide-right');
    secMess.classList.replace('showing', 'hidden');
    meImage.classList.replace('showing', 'hidden');
}
function turnHidden(trnTo){
    trnTo.classList.replace('showing', 'hidden')
}

function turnHiddenSlow(trnTo){
    trnTo.classList.replace('showing-slow', 'hidden')
}

function spaceChange(item){
    item.style.background = "black";
}

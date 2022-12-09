let tBtn = document.getElementById('bar');
let navbar= document.getElementById('navbar-item');
let arrowBtn = document.getElementById('arrow')

tBtn.addEventListener('click', ()=>{
    navbar.classList.add('active');
    // lockScroll();
});

arrowBtn.addEventListener('click', ()=>{
    navbar.classList.remove('active')
    // unlockScroll();     
})

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

function unlockScroll() {
    document.body.classList.toggle('unlock-scroll');
}

let mainImg = document.getElementById('main-img');
let smallImg = document.querySelectorAll('.small-img'); 
smallImg.forEach(img => {
    img.addEventListener('click', (e)=>{
        mainImg.src = e.target.src;
    });    
});


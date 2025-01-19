//typing text code
var typed = new Typed('.multiple-text', {
    strings: ['C++', 'Html...', 'CSS...', 'JavaScript', 'React Js ', 'GitHub', 'BootStrap', 'SQL...', 'Java...'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: Infinity,
});

function resume() {
    window.location.href = 'https://drive.google.com/file/d/1ZdkiMV8nEj6kiB3BjXMFMOMBM-H9Zw46/view?usp=drive_link'
}

function project() {
    window.location.href = 'Projects.html'
}

window.addEventListener('load', () => {
    // Simulate loading completion
    document.body.classList.add('loaded');
});

let whatsapp=document.getElementById('WhatsApp')
whatsapp.addEventListener('click',()=>{
    window.location.href='https://wa.me/qr/BVGXJPQECACMF1 '
})

// -----menu AND cross----
function show() {
   let showBar=document.getElementById('menu-bar')
   showBar.setAttribute('class','hide')
   let hideBar=document.getElementById('cross-bar')
   hideBar.setAttribute('class','show')
   
   let list=document.getElementById('list')
   let res=list.getAttribute('class');
   if(res=='hide')
        list.setAttribute('class','show')

    

}

function hide(){
    let showBar=document.getElementById('menu-bar')
    showBar.setAttribute('class','show')
    let hideBar=document.getElementById('cross-bar')
    hideBar.setAttribute('class','hide')

    let list=document.getElementById('list')
    let res=list.getAttribute('class');
    if(res=='show')
         list.setAttribute('class','hide')
 
}


window.onscroll=()=>{
    //when will scrollbar down then navbar will hide
    let tog=document.getElementById('list')
    tog.setAttribute('class','hide');
   
   //and then menu-icon will shown in front
    let nav=document.getElementById('menu-bar');
    nav.setAttribute('class','show');

    //and cross icon will hide but menu icon are shown in front
    let cross=document.getElementById('cross-bar')
    cross.setAttribute('class','hide');
    
}


// ---slide--section0--code--

let item = document.querySelectorAll('.slider2 .item');
let next2 = document.getElementById('next');
next2.onclick = function () {
    active = active + 1 < item.length ? active + 1 : active;
    show();
}

let prev = document.getElementById('prev');
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    show();
   
}

let active = 3;


function show() {
    let strt = 0;

    item[active].style.transform = `none`;
    item[active].style.zIndex = 1;
    item[active].style.filter = 'none';
    item[active].style.opacity = 1;

    for (var i = active + 1; i < item.length; i++) {
        strt++;
        item[i].style.transform = `translateX(${120 * strt}px) scale(${1 - 0.2 * strt}) perspective(16px) rotateY(-1deg)`;
        item[i].style.zIndex = -strt;
        item[i].style.filter = 'blur(5px)';
        item[i].style.opacity = strt > 2 ? 0 : 0.6;
    };
    strt = 0;
    for (var i = active -1 ; i >= 0; i--) {
        strt++;
        item[i].style.transform = `translateX(${-120 * strt}px) scale(${1 - 0.2 * strt}) perspective(16px) rotateY(1deg)`;
        item[i].style.zIndex = -strt;
        item[i].style.filter = 'blur(5px)';
        item[i].style.opacity = strt > 2 ? 0 : 0.6;
    }

}
show();




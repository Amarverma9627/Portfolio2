//typing text code
var typed = new Typed('.multiple-text', {
     strings: ['C++', 'Html...', 'CSS...', 'JavaScript', 'React Js ', 'GitHub', 'BootStrap', 'SQL...', 'Java...'],
     typeSpeed: 100,
     backSpeed: 60,
     loop: Infinity,
});

function resume() {
     window.location.href = 'https://drive.google.com/file/d/1OE-qHJafWg1l9PM6LhepvoAi8PxjSFa1/view?usp=drive_link';
}

function project() {
     window.location.href = 'Projects.html'
}

window.addEventListener('load', () => {
     // Simulate loading completion
     document.body.classList.add('loaded');
});

let whatsapp = document.getElementById('WhatsApp')
whatsapp.addEventListener('click', () => {
     window.location.href = 'https://wa.me/qr/BVGXJPQECACMF1 '
})

// -----menu AND cross----
function show() {
     let showBar = document.getElementById('menu-bar')
     showBar.setAttribute('class', 'hide')
     let hideBar = document.getElementById('cross-bar')
     hideBar.setAttribute('class', 'show')

     let list = document.getElementById('list')
     let res = list.getAttribute('class');
     if (res == 'hide')
          list.setAttribute('class', 'show')



}

function hide() {
     let showBar = document.getElementById('menu-bar')
     showBar.setAttribute('class', 'show')
     let hideBar = document.getElementById('cross-bar')
     hideBar.setAttribute('class', 'hide')

     let list = document.getElementById('list')
     let res = list.getAttribute('class');
     if (res == 'show')
          list.setAttribute('class', 'hide')

}


window.onscroll = () => {
     //when will scrollbar down then navbar will hide
     let tog = document.getElementById('list')
     tog.setAttribute('class', 'hide');

     //and then menu-icon will shown in front
     let nav = document.getElementById('menu-bar');
     nav.setAttribute('class', 'show');

     //and cross icon will hide but menu icon are shown in front
     let cross = document.getElementById('cross-bar')
     cross.setAttribute('class', 'hide');

}

function fb() {
     window.location.href = "https://www.facebook.com/vs.king.330?mibextid=ZbWKwL";
}
function Whatsapp() {
     window.location.href = "https://wa.me/qr/BVGXJPQECACMF1 "
}
function tele() {
     window.location.href = ""
}
function twtr() {
     window.location.href = ""
}
function yt() {
     window.location.href = "https://www.youtube.com/@coder_amar_10k"
}
function git() {
     window.location.href = "https://github.com/Amarverma9627"
}
function linked() {
     window.location.href = "https://www.linkedin.com/in/amar-verma-91b27a256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
}
function insta() {
     window.location.href = "https://www.instagram.com/"
}
function yoga() {
     window.location.href = "https://amarverma9627.github.io/YogaClass/"
}


// ----slide--



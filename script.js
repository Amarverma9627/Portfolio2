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


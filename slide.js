let count = 0;
const slides = document.querySelectorAll('#slide');
console.log(slides);
slides.forEach((ele, index) => {
    ele.style.left = `${index * 100}%`
})

const slideImg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`
    })
}

const next = () => {
    if (count < 3) {
        count++;
        slideImg()
    }
    if (count == 3) {
        count = 0;
    }
}
const prev = () => {
    if (count >= 0) {
        count--;
        slideImg()
    }
    if(count == 0) {
        count == 3;
    }
}
class Bounce {
    constructor(options) {
        this.item = document.querySelector(options.item);
        this.speed = options.speed;
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.velocityX = 1;
        this.velocityY = 1;
        if (options.borderColor && options.borderColor === 'random') {
            this.item.style.transition = `border 2s`
            setInterval(() => {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                this.item.style.borderColor = `#${randomColor}`
            }, 3000);
        }
        if (options.backgroundColor && options.backgroundColor === 'random') {
            setInterval(() => {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                this.item.style.transition = `background-color 3s`
                this.item.style.backgroundColor = `#${randomColor}`
            }, 3000);
        }
        setInterval(() => {
            let rect = this.item.getBoundingClientRect()
            let left = rect.x
            let top = rect.y
            if (left + rect.width >= this.width || left <= 0) {
                this.velocityX = -this.velocityX
            }
            if (top + rect.height >= this.height || top <= 0) {
                this.velocityY = -this.velocityY
            }
            this.item.style.left = rect.x + this.velocityX + 'px'
            this.item.style.top = rect.y + this.velocityY + 'px'
        }, this.speed)
    }
}

const greenCircle = new Bounce({
    item: '.web-programming__green-circle',
    speed: 10,
    borderColor: 'random',
})
const whiteBgCircle = new Bounce({
    item: '.web-programming__white-bg-circle',
    speed: 5,
    backgroundColor: 'random'
})
const blueBgCircle = new Bounce({
    item: '.web-programming__blue-bg-circle',
    speed: 10
})
const blueCircle = new Bounce({
    item: '.web-programming__blue-circle',
    speed: 15
})
////////////////////////////////////////////////
const longLine = document.querySelector('.web-programming__long-line');
setInterval(() => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    longLine.style.borderColor = `#${randomColor}`
}, 3000);
////////////////////////////////////////////////////////
const countTime = document.querySelector('.questions__timer');
const countTimeMinute = document.querySelector('.questions__timer-minute');
const countTimeSecond = document.querySelector('.questions__timersecond');
let interval
countTime.innerHTML = '10:00'
function startTimer(duration, display) {
        clearInterval(interval)
        display.innerHTML == '10:00'
        let timer = duration, minutes, seconds;
        interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            if ((minutes + ":" + seconds) != countTime.innerHTML) {
                display.textContent = minutes + ":" + seconds;
            }
            if (--timer < 0) {
                timer = duration;
            }
            if (display.innerHTML == '00:00') {
                clearInterval(interval)
            }
        }, 10);
}

const slides = document.querySelectorAll('.slide');

let count = 0;
document.onkeydown = e => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown'){
        if(count >= slides.length-1) return
        count += 1
    }else if(e.key === 'ArrowLeft' || e.key === 'PageUp'){
        if(count <= 0) return
        count -= 1
    }
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.classList.remove('active')
        if(i != count) continue
        const activeSlide = slides[count];
        activeSlide.classList.add('active')
    }
    if(count == slides.length-1){
        countTime.innerHTML = '10:00'
setTimeout(() => {
    let fiveMinutes = 60 * 10,
        display = document.querySelector('.questions__timer');
    startTimer(fiveMinutes, display);
}, 500)
    }
}
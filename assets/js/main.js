var lasstScrollTop = 0;
const nav = document.querySelector('#navigation')
const faders = document.querySelectorAll('.fade-in')

window.addEventListener("scroll", function () {
    //ẩn hiện header
    var srollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;

    if (srollTop > lasstScrollTop) {
        nav.style.top = '-133px';
    }else{
        nav.style.top = '0';
    }
    lasstScrollTop = srollTop;
})

const appearOtions = {
    threshold: 0.5
}

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOtions)

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})

const navSlide = function (){
    const mobileNav = document.querySelector('.nav-moblie-wrap')
    const burger = document.querySelector('.burger');

    burger.addEventListener('click',()=>{
        //toggle nav
        mobileNav.classList.toggle('active');
        
        // burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();
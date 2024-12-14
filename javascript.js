const scrollToTopBtn = document.getElementById('subir');

window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const slider = document.querySelector('.slides');
let index = 0;

function autoSlide() {
    index = (index + 1) % slider.children.length;
    slider.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth"
    });
}

setInterval(autoSlide, 3000);

 type="text/javascript">
AOS.init(
{offset:200, duration:1000,}
);



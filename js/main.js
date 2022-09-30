const header = document.querySelector('header')
const body = document.querySelector('body')
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY) {
            header.classList.add('is__active')
        }
        else {
            header.classList.remove('is__active')
        }
    })
}

AOS.init({
    duration: 1000,
    once: true,
    offset: 0,
})

if (document.querySelector('.banner__slider')) {
    const homeSlider = new Splide('.banner__slider', {
        type: 'fade',
        pagination: false,
        cover: true,
        width: '100%',
        height: '80vh',
        rewind: true,
        waitForTransition: true,
        updateOnMove: true,
        autoplay: true,
        arrows: false,
        interval: 5000,
        speed: 1500,
        pauseOnHover: false,
        breakpoints: {
            991: {
                arrows: false,
            },
        }
    })
    homeSlider.mount()
}
if (document.querySelector('.testimonial__slide')) {
    const homeSlider = new Splide('.testimonial__slide', {
        type: 'loop',
        perPage: 1,
        pagination: false,
        cover: true,
        rewind: true,
        waitForTransition: true,
        updateOnMove: true,
        autoplay: true,
        arrows: false,
        interval: 5000,
        speed: 1500,
        pauseOnHover: false,
        autoplay: true,
        breakpoints: {
            991: {
                arrows: false,
            },
        }
    })
    homeSlider.mount()
}

document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector("#menu"), "(max-width: 992px)"
        );

        const navigator = menu.navigation({
            title: 'Himalayan Nada Nirvana Yoga',
        });
        const drawer = menu.offcanvas({
            position: "right",
        });

        document.querySelector('a[href="#menu"]')
            .addEventListener('click', (evnt) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);
lightGallery(document.querySelector('.gallery__grid'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 600,
    licenseKey: "0000-0000-000-0000",
});
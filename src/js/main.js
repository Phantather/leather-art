var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,  // Интервал между переключениями (3 секунды)
        disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
    },
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,

        },
        375: {
            slidesPerView: 1,
            spaceBetween: 20,

        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});



let burgerCheckbox = document.querySelector('.burger-checkbox');
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let menuLinks = document.querySelectorAll('.menu a');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
})


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-active');
        burgerCheckbox.checked = false;
    });
});

// Управление модальным окном
const modal = document.getElementById('contactModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});


// Управление кнопкой социальных сетей
const socialsToggle = document.getElementById('socialsToggle');
const socialsDropdown = document.getElementById('socialsDropdown');

socialsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    socialsDropdown.classList.toggle('hidden');
});

// Закрывать меню при клике вне его
document.addEventListener('click', (e) => {
    if (!socialsDropdown.contains(e.target)){
        socialsDropdown.classList.add('hidden');
    }
});
// Ограничение количества файлов (3)
document.getElementById('photos').addEventListener('change', function () {
    if (this.files.length > 5) {
        alert('Maximum 5 files allowed');
        this.value = '';
    }
});

// Обработка отправки формы
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    // Formspree автоматически обработает отправку
});


Fancybox.bind("[data-fancybox='gallery']", {
    infinite: true,
    Thumbs: {
        type: "modern",
        show: true
    },
    animated: false,
});

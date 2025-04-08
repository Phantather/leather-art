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

// Ограничение количества файлов (3)
document.getElementById('photos').addEventListener('change', function() {
    if (this.files.length > 3) {
        alert('Maximum 3 files allowed');
        this.value = '';
    }
});

// Обработка отправки формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    // Formspree автоматически обработает отправку
});

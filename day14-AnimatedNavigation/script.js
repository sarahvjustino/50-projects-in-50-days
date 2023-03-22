const btnToggle = document.getElementById('toggle');
const nav = document.querySelector('nav');

btnToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
})
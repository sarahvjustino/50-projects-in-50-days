const btnOpenMenu = document.getElementById('open');
const btnCloseMenu = document.getElementById('close');
const container = document.querySelector('.container');

btnOpenMenu.addEventListener('click', () => {
    container.classList.add('show-nav')
});

btnCloseMenu.addEventListener("click", () => {
    container.classList.remove('show-nav')
})
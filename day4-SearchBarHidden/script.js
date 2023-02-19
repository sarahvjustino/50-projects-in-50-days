const btnSearch = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');

btnSearch.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus()
});
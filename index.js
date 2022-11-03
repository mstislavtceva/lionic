const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(element) {
    element.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    });
});

const btnMore = document.querySelector('.articles-more');
const articlesItems = document.querySelectorAll('.articles__item');

btnMore.addEventListener('click', function() {
    articlesItems.forEach(function(element) {
        element.classList.add('articles__item--visible');
    });
    btnMore.closest('.articles-center').classList.add('articles-center--hidden');
});
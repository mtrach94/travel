const navOpener = () => {
    const btnNavOpener = document.querySelector('.js-nav-opener');
    const navHolder = document.querySelector('.js-nav-holder');

    btnNavOpener.addEventListener('click', (event) => {
        event.target.classList.toggle('active');
        navHolder.classList.toggle('active');
    })
}

navOpener();
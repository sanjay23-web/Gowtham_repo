
const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('.btn-loginpopup');
const iconClose = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');


loginBtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});


iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


registerLink.addEventListener('click', (event) => {
    // Prevent the default link behavior (jumping/reloading)
    event.preventDefault();
    wrapper.classList.add('active');
});


loginLink.addEventListener('click', (event) => {
    // Prevent the default link behavior (jumping/reloading)
    event.preventDefault();
    wrapper.classList.remove('active');
});
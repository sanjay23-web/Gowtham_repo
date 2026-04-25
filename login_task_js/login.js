
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


const regbtn = document.getElementById('reg-btn');
const loginbtnfinal = document.getElementById('login-btn');

regbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('reg-user').value;
    const password = document.getElementById('reg-pass').value;

    if (username && password) {
        localStorage.setItem('user', username);
        localStorage.setItem('pass', password);
        alert('Registration successful! welcome'+ username );
        wrapper.classList.remove('active');
    } else {
        alert('Please fill in all fields.');
    }
});


loginbtnfinal.addEventListener('click', (e) => {
    e.preventDefault();
    const emailinput = document.getElementById('login-email').value;
    const passinput = document.getElementById('login-pass').value;

    const saveduser = localStorage.getItem('user');
    const savedpass = localStorage.getItem('pass');

    if (emailinput === saveduser && passinput === savedpass) {
        alert('Login successful! ');
        window.location.href = 'homep.html';
    } else {
        alert('Invalid username or password.');
    }
});

function toggleForm() {
    const loginRadio = document.getElementById('login');
    const loginForm = document.getElementById('login-page');
    const registerForm = document.getElementById('register-page');

    if (loginRadio.checked) {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        // Optional: you might want to adjust 'required' attributes here
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        // Optional: you might want to adjust 'required' attributes here
    }
}

// Ensure the correct form is shown on initial page load
document.addEventListener('DOMContentLoaded', (event) => {
    toggleForm();
});

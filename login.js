// Form Elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordToggle = document.getElementById('passwordToggle');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Email Validation
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Password Validation
const validatePassword = (password) => {
    return /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
};

// Clear Error Message
const clearError = (errorElement, inputElement) => {
    errorElement.classList.remove('show');
    errorElement.textContent = '';
    inputElement.style.borderColor = '#1A3A5C';
};

// Show Error Message
const showError = (errorElement, inputElement, message) => {
    errorElement.textContent = message;
    errorElement.classList.add('show');
    inputElement.style.borderColor = '#FF6B6B';
};

// Email Input Validation
emailInput.addEventListener('blur', () => {
    const email = emailInput.value.trim();
    if (!email) {
        showError(emailError, emailInput, 'Email is required');
    } else if (!validateEmail(email)) {
        showError(emailError, emailInput, 'Please enter a valid email address');
    } else {
        clearError(emailError, emailInput);
    }
});

emailInput.addEventListener('input', () => {
    if (emailError.classList.contains('show')) {
        const email = emailInput.value.trim();
        if (email && validateEmail(email)) {
            clearError(emailError, emailInput);
        }
    }
});

// Password Input Validation
passwordInput.addEventListener('blur', () => {
    const password = passwordInput.value;
    if (!password) {
        showError(passwordError, passwordInput, 'Password is required');
    } else if (!validatePassword(password)) {
        showError(passwordError, passwordInput, 'Password must be at least 8 characters and must include both letters and numbers');
    } else {
        clearError(passwordError, passwordInput);
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordError.classList.contains('show')) {
        const password = passwordInput.value;
        if (password && validatePassword(password)) {
            clearError(passwordError, passwordInput);
        }
    }
});

// Password Toggle
passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    } else {
        passwordInput.type = 'password';
        passwordToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
    }
});

// Form Submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate Email
    const email = emailInput.value.trim();
    if (!email) {
        showError(emailError, emailInput, 'Email is required');
    } else if (!validateEmail(email)) {
        showError(emailError, emailInput, 'Please enter a valid email address');
    } else {
        clearError(emailError, emailInput);
    }

    // Validate Password
    const password = passwordInput.value;
    if (!password) {
        showError(passwordError, passwordInput, 'Password is required');
    } else if (!validatePassword(password)) {
        showError(passwordError, passwordInput, 'Password must be at least 8 characters, contain only letters and numbers, and include both letters and numbers');
    } else {
        clearError(passwordError, passwordInput);
    }

    // If all validations pass
    if (email && validateEmail(email) && password && validatePassword(password)) {
        console.log('Form submitted:', { email, password });
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    }
});

// Clear errors on input focus
emailInput.addEventListener('focus', () => {
    if (emailError.classList.contains('show')) {
        clearError(emailError, emailInput);
    }
});

passwordInput.addEventListener('focus', () => {
    if (passwordError.classList.contains('show')) {
        clearError(passwordError, passwordInput);
    }
});

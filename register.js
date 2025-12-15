// Form Elements
const registerForm = document.getElementById('registerForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const agreeTermsInput = document.getElementById('agreeTerms');
const passwordToggle = document.getElementById('passwordToggle');
const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');

// Error Elements
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validation Functions
const validateFullName = (name) => {
    return name.trim().length >= 2 && name.trim().split(' ').length >= 2;
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
};

const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword && password.length > 0;
};

// Clear Error
const clearError = (errorElement, inputElement) => {
    errorElement.classList.remove('show');
    errorElement.textContent = '';
    inputElement.style.borderColor = '#1A3A5C';
};

// Show Error
const showError = (errorElement, inputElement, message) => {
    errorElement.textContent = message;
    errorElement.classList.add('show');
    inputElement.style.borderColor = '#FF6B6B';
};

// Full Name Validation
fullNameInput.addEventListener('blur', () => {
    const name = fullNameInput.value.trim();
    if (!name) {
        showError(fullNameError, fullNameInput, 'Full name is required');
    } else if (!validateFullName(name)) {
        showError(fullNameError, fullNameInput, 'Please enter your full name (first and last name)');
    } else {
        clearError(fullNameError, fullNameInput);
    }
});

fullNameInput.addEventListener('input', () => {
    if (fullNameError.classList.contains('show')) {
        const name = fullNameInput.value.trim();
        if (name && validateFullName(name)) {
            clearError(fullNameError, fullNameInput);
        }
    }
});

// Email Validation
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

// Password Validation
passwordInput.addEventListener('blur', () => {
    const password = passwordInput.value;
    if (!password) {
        showError(passwordError, passwordInput, 'Password is required');
    } else if (!validatePassword(password)) {
        showError(passwordError, passwordInput, 'Password must be at least 8 characters, contain only letters and numbers, and include both letters and numbers');
    } else {
        clearError(passwordError, passwordInput);
        // Check confirm password match
        if (confirmPasswordInput.value && !validatePasswordMatch(password, confirmPasswordInput.value)) {
            showError(confirmPasswordError, confirmPasswordInput, 'Passwords do not match');
        } else {
            clearError(confirmPasswordError, confirmPasswordInput);
        }
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordError.classList.contains('show')) {
        const password = passwordInput.value;
        if (password && validatePassword(password)) {
            clearError(passwordError, passwordInput);
        }
    }
    // Update confirm password validation
    if (confirmPasswordInput.value) {
        if (!validatePasswordMatch(password, confirmPasswordInput.value)) {
            if (confirmPasswordError.classList.contains('show')) {
                showError(confirmPasswordError, confirmPasswordInput, 'Passwords do not match');
            }
        } else {
            clearError(confirmPasswordError, confirmPasswordInput);
        }
    }
});

// Confirm Password Validation
confirmPasswordInput.addEventListener('blur', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (!confirmPassword) {
        showError(confirmPasswordError, confirmPasswordInput, 'Please confirm your password');
    } else if (!validatePasswordMatch(password, confirmPassword)) {
        showError(confirmPasswordError, confirmPasswordInput, 'Passwords do not match');
    } else {
        clearError(confirmPasswordError, confirmPasswordInput);
    }
});

confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordError.classList.contains('show')) {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        if (confirmPassword && validatePasswordMatch(password, confirmPassword)) {
            clearError(confirmPasswordError, confirmPasswordInput);
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

// Confirm Password Toggle
confirmPasswordToggle.addEventListener('click', () => {
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        confirmPasswordToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    } else {
        confirmPasswordInput.type = 'password';
        confirmPasswordToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
    }
});

// Form Submit
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Full Name
    const name = fullNameInput.value.trim();
    if (!name) {
        showError(fullNameError, fullNameInput, 'Full name is required');
        isValid = false;
    } else if (!validateFullName(name)) {
        showError(fullNameError, fullNameInput, 'Please enter your full name (first and last name)');
        isValid = false;
    } else {
        clearError(fullNameError, fullNameInput);
    }

    // Validate Email
    const email = emailInput.value.trim();
    if (!email) {
        showError(emailError, emailInput, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError(emailError, emailInput, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(emailError, emailInput);
    }

    // Validate Password
    const password = passwordInput.value;
    if (!password) {
        showError(passwordError, passwordInput, 'Password is required');
        isValid = false;
    } else if (!validatePassword(password)) {
        showError(passwordError, passwordInput, 'Password must be at least 8 characters, contain only letters and numbers, and include both letters and numbers');
        isValid = false;
    } else {
        clearError(passwordError, passwordInput);
    }

    // Validate Confirm Password
    const confirmPassword = confirmPasswordInput.value;
    if (!confirmPassword) {
        showError(confirmPasswordError, confirmPasswordInput, 'Please confirm your password');
        isValid = false;
    } else if (!validatePasswordMatch(password, confirmPassword)) {
        showError(confirmPasswordError, confirmPasswordInput, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPasswordError, confirmPasswordInput);
    }

    // Validate Terms
    if (!agreeTermsInput.checked) {
        alert('Please agree to the Terms & Conditions');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        console.log('Form submitted:', { name, email, password });
        alert('Account created successfully!');
        window.location.href = 'login.html';
    }
});

// Clear errors on focus
fullNameInput.addEventListener('focus', () => {
    if (fullNameError.classList.contains('show')) {
        clearError(fullNameError, fullNameInput);
    }
});

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

confirmPasswordInput.addEventListener('focus', () => {
    if (confirmPasswordError.classList.contains('show')) {
        clearError(confirmPasswordError, confirmPasswordInput);
    }
});

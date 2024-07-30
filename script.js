// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        if (!isValidEmail(emailInput.value)) {
            emailError.style.display = 'block'; // Show error message
            successMessage.style.display = 'none'; // Hide success message
        } else {
            emailError.style.display = 'none'; // Hide error message
            successMessage.style.display = 'block'; // Show success message

            // Clear the form inputs
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        }
    });

    function isValidEmail(email) {
        // Regular expression for validating an email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});



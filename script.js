document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        

        // Basic validation
        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (message === '') {
            alert('Please enter your message.');
            return;
        }

        // If all fields are valid, you can submit the form or send the data via AJAX
        alert('Form submitted successfully!');

        // Programmatically submit the form
        form.submit();
    
        // Reset the form fields
        form.reset();
        
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
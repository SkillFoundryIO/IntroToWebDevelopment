document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();
        
        var isValid = true;
        
        if (name === '') {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nameError').style.display = 'none';
        }
        
        if (email === '' || !isValidEmail(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }
        
        if (message === '') {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('messageError').style.display = 'none';
        }
        
        if (isValid) {
            // Form is valid, you can perform further actions here (e.g., send form data to server)
            alert('Form submitted successfully!');
            document.getElementById('contactForm').reset();
        }
    });
    
    function isValidEmail(email) {
        // Simple email validation regex pattern... we didn't cover this in the course, so consider it a bonus!
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
        // Don't go too deep on this, most people look them up.
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});


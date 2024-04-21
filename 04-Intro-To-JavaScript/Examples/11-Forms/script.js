document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const errorsList = document.getElementById('errors');
    const errorDiv = document.getElementsByClassName('errorBox')[0];

    const email = form.elements['email'];
    const age = form.elements['age'];
    const acceptTerms = form.elements['acceptTerms'];

    // Helper function to add an error message to the list
    function addError(message) {
        const li = document.createElement('li');
        li.textContent = message;
        errorsList.appendChild(li);
    }

    // Helper function to clear all error messages
    function clearErrors() {
        errorsList.innerHTML = '';
        errorDiv.style.display = 'none';
    }

    // the submit event is the default for clicking a submit button in a form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        // Clear previous errors
        clearErrors();

        // Initialize validation check
        let isValid = true;

        // Validate email
        if (!email.value || !email.validity.valid) {
            addError('Please enter a valid email address.');
            isValid = false;
        }

        // Validate age
        const ageValue = parseInt(age.value);
        if (isNaN(ageValue) || ageValue < 18 || ageValue > 120) {
            addError('Age must be between 18 and 120.');
            isValid = false;
        }

        // Validate terms and conditions
        if (!acceptTerms.checked) {
            addError('You must accept the terms and conditions to proceed.');
            isValid = false;
        }

        // If the form is valid
        if (isValid) {
            console.log("Valid form, ready to submit!");
            // Here we would submit the form using a post or in JavaScript sending
            // an API request.
        }
        else {
            errorDiv.style.display = 'block';
        }
    });
});
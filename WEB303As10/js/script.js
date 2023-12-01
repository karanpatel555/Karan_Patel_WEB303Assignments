document.addEventListener('DOMContentLoaded', function () {
    // Populate countries in the dropdown
    const countriesArray = countries; 
    const countrySelect = document.getElementById('country');
    countriesArray.forEach(country => {
        let option = new Option(country.name, country.code);
        countrySelect.add(option);
    });

    // Form elements
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('registrationForm');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Validation function
    function validateForm() {
        const isUsernameValid = username.value.trim() !== '';
        const isPasswordValid = password.value.length >= 12;
        const isPasswordConfirmed = password.value === confirmPassword.value;
        const areTermsAccepted = terms.checked;
        const isCountrySelected = countrySelect.value !== '';

        submitBtn.disabled = !(isUsernameValid && isPasswordValid && isPasswordConfirmed && areTermsAccepted && isCountrySelected);
    }

    // Attach event listeners
    [username, password, confirmPassword, terms, countrySelect].forEach(element => {
        element.addEventListener('change', validateForm);
        element.addEventListener('keyup', validateForm);
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        welcomeMessage.textContent = `Welcome ${username.value}! The country code you selected is ${countrySelect.value}`;
    });
});

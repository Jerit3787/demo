document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const usernameError = document.querySelector('#usernameError');
    const emailError = document.querySelector('#emailError');

    // Username validation: must be at least 3 characters long
    usernameInput.addEventListener('input', () => {
        if (usernameInput.value.length < 3) {
            usernameError.textContent = 'Characters must be at least 3';
        } else {
            usernameError.textContent = '';
        }
    })

    // Email validation: must be in valid email format
    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Email must be in the correct format';
        } else {
            emailError.textContent = '';
        }
    })

    const form = document.querySelector('#registrationForm');
    const successMessage = document.querySelector('#successMessage');

    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();

    //     const username = usernameInput.value;
    //     const email = emailInput.value;

    //     // Validate input before submitting
    //     if (username < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //         //The test() method is being used to validate the format of 
    //         //the email input using a regular expression (regex).

    //         successMessage.textContent = 'Please fix errors before submitting.';

    //         return;
    //     }

    //     // Simulate a server request using a Promise
    //     const submitForm = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (username && email) {
    //                 resolve();
    //             } else {
    //                 reject();
    //             }
    //         }, 2000);
    //     })

    //     submitForm.then(() => {
    //         successMessage.style.color = 'green';
    //         successMessage.textContent = 'Form submitted successfully!';
    //         usernameInput.textContent = '';
    //         emailInput.textContent = '';
    //     }).catch((error) => {
    //         successMessage.style.color = 'red';
    //         successMessage.textContent = 'Form submission failed!';
    //     })
    // })

    async function handleSubmit(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const email = emailInput.value;

        // Validate inputs before submitting
        if (username < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            successMessage.textContent = 'Please fix errors before submitting.';
            return;
        }

        try {
            const response = await submitForm(username, email);
        } catch (error) {
            throw new error;
        }

        async function submitForm(username, email) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (username && email) {
                        resolve("Form submitted successfully!");
                    } else {
                        reject("Form submission failed.");
                    }
                }, 2000); // Simulate server delay
            });
        };
    };

    form.addEventListener('submit', handleSubmit);
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const dropdown = this.nextElementSibling; // Get the dropdown menu

            if (dropdown) {
                dropdown.classList.toggle('show'); // Toggle the dropdown
                const icon = this.querySelector('i'); // Get the chevron icon
                icon.classList.toggle('bi-chevron-down'); // Change icon to down
                icon.classList.toggle('bi-chevron-up'); // Change icon to up
            }
        });
    });
});
// Select all reorder buttons
const reorderButtons = document.querySelectorAll('.reorder-button');

reorderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const loadingIcon = this.querySelector('.loading-icon');
        const finishedIcon = this.querySelector('.finished-icon');
        const buttonText = this.querySelector('.button-text');

        // Start loading state
        this.classList.add('loading'); // Add loading class
        loadingIcon.style.display = 'inline'; // Show loading icon
        finishedIcon.style.display = 'none'; // Hide finished icon
        buttonText.style.display = 'none'; // Hide button text

        // Simulate an API call or loading period
        setTimeout(() => {
            // Finish loading state
            this.classList.remove('loading'); // Remove loading class
            loadingIcon.style.display = 'none'; // Hide loading icon
            finishedIcon.style.display = 'inline'; // Show finished icon
            buttonText.style.display = 'inline'; // Show button text again
        }, 2000); // Adjust the timeout as needed
    });
});


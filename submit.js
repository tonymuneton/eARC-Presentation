document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector('.next-button[data-target="step36-content"]');
    if (nextButton) {
        nextButton.addEventListener('click', function(event) {
            event.preventDefault();
            showConfirmationPage();
        });
    }
});

function showConfirmationPage() {
    const formSection = document.getElementById('step35-content');
    const confirmationSection = document.getElementById('step36-content');
    const referenceNumberDisplay = document.getElementById('display-reference-number');

    if (formSection && confirmationSection && referenceNumberDisplay) {
        formSection.style.display = 'none'; // Hide the form
        confirmationSection.style.display = 'block'; // Show the confirmation

        // TODO: Generate or retrieve the actual reference number
        // For demonstration, using 'ABC123' as a placeholder
        const referenceNumber = 'ABC123';
        referenceNumberDisplay.textContent = referenceNumber; // Set the reference number text
    } else {
        console.error('Required elements not found.');
    }
}
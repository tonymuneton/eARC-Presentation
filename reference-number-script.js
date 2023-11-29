document.addEventListener("DOMContentLoaded", function () {
    // Update active navigation item
    function updateActiveNavItem(targetId) {
        // Remove active class from all items
        document.querySelectorAll('.sidebar li').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the current item
        const activeItem = document.querySelector(`.sidebar li[data-target="${targetId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
            // Expand the parent collapsible menu if it exists
            const parentCollapsible = activeItem.closest('.collapsible');
            if (parentCollapsible && !parentCollapsible.classList.contains('active')) {
                toggleCollapsible(parentCollapsible);
            }
        }
    }

    // ... (Your existing functions and event listeners here)

    // Function to generate and display a reference number
    function generateReferenceNumber() {
        let refNumber = sessionStorage.getItem('arcReferenceNumber');
        if (!refNumber) {
            // Generate a new numeric string of length 9
            refNumber = 'ARC-' + Math.floor(Math.random() * 1000000000);
            sessionStorage.setItem('arcReferenceNumber', refNumber);
        }

        const refDisplays = document.querySelectorAll('.reference-number span');
        refDisplays.forEach(span => span.textContent = refNumber);
    }

    // Call the reference number generation function on load
    generateReferenceNumber();

    // ... (Any additional code you may have here)
});

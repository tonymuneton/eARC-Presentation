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

    // Handle clicks on non-collapsible sidebar items
    const navItems = document.querySelectorAll('.sidebar li:not(.collapsible)');
    navItems.forEach(item => {
        item.addEventListener('click', event => {
            const targetId = event.target.getAttribute('data-target');
            toggleContent(targetId);
            updateActiveNavItem(targetId);
        });
    });

    document.querySelector('.sidebar').addEventListener('click', event => {
        const target = event.target;
        
        // Check if the clicked target is an arrow or has a class that indicates it's a title of a collapsible section
        if (target.classList.contains('arrow') || target.classList.contains('arc-guidelines') || target.classList.contains('arc-section')) {
            const collapsible = target.closest('.collapsible');
            toggleCollapsible(collapsible);
            
            // Determine the content ID based on which title was clicked
            let contentId = '';
            if (target.classList.contains('arc-guidelines')) {
                contentId = 'arc-guidelines-content';
            } else if (target.classList.contains('arc-section')) {
                contentId = collapsible.querySelector('.content li').dataset.target; // Get the target of the first list item in the collapsible section
            }
    
            // Toggle the content display and update the active navigation item
            if (contentId) {
                toggleContent(contentId);
                updateActiveNavItem(contentId);
            }
            
            event.stopPropagation();
        }
    });

    // Start the ARC Form button click handler
    document.querySelector('.start-button').addEventListener('click', function () {
        toggleContent('arc-guidelines-content');
        // Set the 'ARC Guidelines' as active in the sidebar
        setActiveSidebarItem('arc-guidelines-content');
    });

    document.querySelectorAll('.next-button').forEach(button => {
        button.addEventListener('click', function () {
            // Check if it's the Begin ARC button by looking at the data-target attribute
            const isBeginArcButton = this.getAttribute('data-target') === 'step1-content';
            if (isBeginArcButton) {
                // Close 'ARC Guidelines' submenu if it is open
                const arcGuidelinesCollapsible = document.querySelector('.arc-guidelines').closest('.collapsible');
                if (arcGuidelinesCollapsible && arcGuidelinesCollapsible.classList.contains('active')) {
                    toggleCollapsible(arcGuidelinesCollapsible); // This will close the ARC Guidelines submenu
                }
    
                // Open 'ARC 1' submenu
                const arcSectionCollapsible = document.querySelector('.arc-section').closest('.collapsible');
                if (arcSectionCollapsible && !arcSectionCollapsible.classList.contains('active')) {
                    toggleCollapsible(arcSectionCollapsible); // This will open the ARC 1 submenu
                }
            }
    
            // Continue with existing functionality of 'next-button'
            const targetId = this.getAttribute('data-target');
            toggleContent(targetId);
            updateActiveNavItem(targetId);
            scrollToActiveItem();
        });
    });
    

    
    function setActiveSidebarItem(targetId) {
        // Remove active class from all items
        document.querySelectorAll('.sidebar li').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the 'ARC Guidelines' menu and the current sub-item
        let targetItem = document.querySelector(`.sidebar li[data-target="${targetId}"]`);
        let parentCollapsibleItem = document.querySelector('.arc-guidelines').closest('.collapsible');

        if (targetItem) {
            targetItem.classList.add('active');
        }

        if (parentCollapsibleItem && !parentCollapsibleItem.classList.contains('active')) {
            toggleCollapsible(parentCollapsibleItem);
        }
    }

function scrollToActiveSubmenuItem() {
    // Find the active item in the submenu
    const activeSubmenuItem = document.querySelector('.sidebar .collapsible .content .active');
    if (activeSubmenuItem) {
        // Scroll the active submenu item into the visible area of the submenu container
        activeSubmenuItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
}
    // Handle clicks on 'next-button' and 'prev-button' elements
    const navigationButtons = document.querySelectorAll('.next-button, .prev-button');
    navigationButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            toggleContent(targetId);
            updateActiveNavItem(targetId);
            setTimeout(scrollToActiveSubmenuItem, 100); // Adjust the timing as necessary // Added a timeout to allow any animations to complete
        });
    });

    function toggleContent(targetId) {
        // Hide all content sections
        document.querySelectorAll('.content-div').forEach(div => {
            div.style.display = 'none';
        });

        // Show the targeted content section if it exists
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.style.display = 'block';
        }

        // Update the active state in the navigation
        updateActiveNavItem(targetId);
    }

    function toggleCollapsible(collapsible) {
        const content = collapsible.querySelector('.content');
        const arrow = collapsible.querySelector('.arrow');
        if (content.style.display === 'block') {
            content.style.display = 'none';
            arrow.textContent = '\u25BC'; // Change to down arrow
            collapsible.classList.remove('active');
        } else {
            content.style.display = 'block';
            arrow.textContent = '\u25B2'; // Change to up arrow
            collapsible.classList.add('active');
        }
    }



    const step1Content = document.getElementById("step1-content");
    const step2Content = document.getElementById("step2-content");

  

    // Initially show the welcome content
    toggleContent('welcome-content');
});
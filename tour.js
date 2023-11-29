document.addEventListener('DOMContentLoaded', function () {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            },
            classes: 'shepherd-theme-arrows',
            scrollTo: { behavior: 'smooth', block: 'center' }
        }
    });

    tour.addStep({
        id: 'example-step',
        text: 'This is the eARC icon, and selecting it will lead you directly to the eARC.',
        attachTo: {
            element: '#eARC-icon',
            on: 'bottom'
        },
        buttons: [
            {
                action: tour.next,
                text: 'Next'
            }
        ],
        popperOptions: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12], // The first number is the horizontal offset, the second number is the vertical offset
                    },
                },
            ],
        },
    });
    tour.addStep({
        id: 'example-step',
        text: 'This is the Resource Catalogue, selecting it will take you directly to our Resource Catalogue',
        attachTo: {
            element: '#rCatalogue-icon',
            on: 'bottom'
        },
        buttons: [
            {
                action: tour.next,
                text: 'Next'
            }
        ],
        popperOptions: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12], // The first number is the horizontal offset, the second number is the vertical offset
                    },
                },
            ],
        },
    });
    tour.addStep({
        id: 'arc-pdf-step',
        text: 'Here, you can easily access the Reception Working Group Dashboard.',
        attachTo: {
            element: '#dash-icon',
            on: 'bottom'
        },
        buttons: [
            {
                action: tour.next,
                text: 'Next'
            }
        ],
        popperOptions: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12], // The first number is the horizontal offset, the second number is the vertical offset
                    },
                },
            ],
        },
    });
    tour.addStep({
        id: 'arc-pdf-step',
        text: 'Click the Support Icon if you ever require guidance or a manual for the site.',
        attachTo: {
            element: '#support-icon',
            on: 'bottom'
        },
        buttons: [
            {
                action: tour.next,
                text: 'Next'
            }
        ],
        popperOptions: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12], // The first number is the horizontal offset, the second number is the vertical offset
                    },
                },
            ],
        },
    });

    // New step for ARC PDF
    tour.addStep({
        id: 'arc-pdf-step',
        text: 'Here you can contact support for further assitance.',
        attachTo: {
            element: '#arc-support',
            on: 'bottom'
        },
        buttons: [
            {
                action: tour.next,
                text: 'Next'
            }
        ],
        popperOptions: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12], // The first number is the horizontal offset, the second number is the vertical offset
                    },
                },
            ],
        },
    })
    // New step for ARC PDF
    tour.addStep({
        id: 'arc-pdf-step',
        text: 'Feel free to download the ARC PDF for offline use here.',
        attachTo: {
            element: '#eARC-pdf',
            on: 'bottom'
        },
        buttons: [
            {
                action: tour.next,
                text: 'Next'
            }
        ],
        popperOptions: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12], // The first number is the horizontal offset, the second number is the vertical offset
                    },
                },
            ],
        },
    });

    tour.addStep({
        id: 'arc-pdf-step',
        text: 'Another Direct Link to the Reception Working Group Dashboard',
        attachTo: {
            element: '#head-dashboard',
            on: 'bottom'
        },
        buttons: [
            {
                action: tour.next,
                text: 'Next'
            }
        ],
        popperOptions: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12], // The first number is the horizontal offset, the second number is the vertical offset
                    },
                },
            ],
        },
    });
    tour.addStep({
        id: 'arc-pdf-step',
        text: 'This is where you will find the login Option. You can use your existing user account or create one if you dont have it yet.',
        attachTo: {
            element: '#login-head',
            on: 'bottom'
        },
        buttons: [
            {
                action: tour.next,
                text: 'Close'
            }
        ],
        popperOptions: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12], // The first number is the horizontal offset, the second number is the vertical offset
                    },
                },
            ],
        },
    });


    // ... add more steps as needed

    // Start the tour when the "Start Interactive Tour" button is clicked
    document.getElementById('startTour').addEventListener('click', function () {
        tour.start();
    });
});

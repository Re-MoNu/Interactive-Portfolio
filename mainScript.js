window.onload = () => {
    
   //moved transition to main.html for smoother transition

    const darkModeToggle = document.getElementById('darkMode');
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        darkModeToggle.innerText = '☀️'; // Set the sun icon if dark mode is active
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        // Change the toggle icon
        if (document.body.classList.contains('dark')) {
            darkModeToggle.innerText = '☀️';
            localStorage.setItem('darkMode', 'enabled'); // Save dark mode state
        } else {
            darkModeToggle.innerText = '🌙';
            localStorage.setItem('darkMode', 'disabled'); // Save light mode state
        }
    });

    document.querySelectorAll('.card.wip').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('shake'); // Add the shake class
            setTimeout(() => {
                card.classList.remove('shake'); // Remove the shake class after the animation
            }, 500); // Match the duration of the animation
        });
    });

    // Card effects

    document.querySelectorAll('.card.complete').forEach(card => { // Select all completed cards
        card.addEventListener('mouseenter', () => {
            document.querySelectorAll('.card').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.add('fade');
                }
            });
        });
        card.addEventListener('mouseleave', () => {
            document.querySelectorAll('.card').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('fade');
                }
            });
        });

        // Card click event, show description.
        card.addEventListener('click', () => {
            if(card.classList.contains('selected')) {
                card.classList.remove('selected');
                document.querySelectorAll('.card').forEach(otherCard => {
                    otherCard.classList.remove('hide');
                });
            }
            else {
                card.classList.add('selected');
                document.querySelectorAll('.card').forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.add('hide');
                    }
                });
            }
        });
    });
}
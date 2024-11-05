window.onload = () => {
    if(sessionStorage.getItem('reloaded') === 'false') {
        const urlParams = new URLSearchParams(window.location.search);
        const startcolor = sessionStorage.getItem('transitionColor');
        sessionStorage.setItem('reloaded', true);

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const circle = document.createElement('div');
        circle.style.left = centerX + 'px';
        circle.style.top = centerY + 'px';
        circle.classList.add('circle-transition');
        circle.style.backgroundColor = startcolor;
        document.body.appendChild(circle);

        setTimeout(() => {
            circle.classList.add('unexpand');
        }, 100);

        circle.addEventListener('transitionend', () => {
            circle.remove();
        });
    }
    
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
}

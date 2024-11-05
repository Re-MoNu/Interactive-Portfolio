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
}

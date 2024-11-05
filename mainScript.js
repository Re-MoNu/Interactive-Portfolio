window.onload = () => {
    
   //moved transition to main.html for smoother transition

    const darkModeToggle = document.getElementById('darkMode');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkModeToggle.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

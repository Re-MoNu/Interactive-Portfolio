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
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkModeToggle.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
    // document.querySelectorAll('.card').forEach(card => {
    //     card.addEventListener('click', function() {
    //         event.stopPropagation();
    //         document.querySelector('.container').classList.add('hidden');
    //         this.classList.add('clicked');
    //          document.addEventListener('click', function reset(event) {
    //         if (!event.target.closest('.card')) {
    //             // Remove the clicked class and restore the layout
    //             document.querySelectorAll('.card').forEach(c => c.classList.remove('clicked'));
    //             document.querySelector('.container').classList.remove('hidden');
                
    //             // Remove this event listener after resetting
    //             document.removeEventListener('click', reset);
    //         }
    //     }, { once: true });
    //     });
    // });
}

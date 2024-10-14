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
            document.querySelector('.container').style.opacity = 1;
            circle.remove();
        });
    }
    document.querySelector('.container').style.opacity = 1;
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            let clicked = document.querySelector('id');
            cardActivate(this.id);
        });
    });
    function cardActivate(id) {
        
    }
}

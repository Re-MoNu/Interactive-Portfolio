function startAnimation() {
    const starter = document.getElementById('starter');
    starter.style.transition = 'opacity 400ms';
    starter.style.opacity = 0;

    let rect = starter.getBoundingClientRect();
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Calculate the center of the button relative to the document
    let buttonCenterX = rect.left + scrollLeft + rect.width / 2;
    let buttonCenterY = rect.top + scrollTop + rect.height / 2;

    let previousColor = Math.random() * 360;

    for(let i=0;i<5;i++) {
        let circle = document.createElement('div');
        circle.id = 'circle' + i;
        circle.classList.add('circle');
        //FIXME: this doesn't center properly.
        circle.style.left = (buttonCenterX - 250) + 'px';
        circle.style.top = (buttonCenterY - 250) + 'px';
        circle.style.zIndex = i;
        document.body.appendChild(circle);
        
        previousColor = previousColor + 60;
        circle.style.backgroundColor = 'hsl(' + previousColor + ', 100%, 50%)';

        setTimeout(() => {
            circle.classList.add('expand');
        }, i*150);

        if(i===4) {
            setTimeout(() => {
                transitionToNextPage(circle.style.backgroundColor);
            }, i*500);
        }
    }
}
transitionToNextPage = (baseColor) => {
    window.location.href = 'main.html?';
    sessionStorage.setItem('transitionColor', baseColor);
    sessionStorage.setItem('reloaded', false);
}
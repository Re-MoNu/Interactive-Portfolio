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

    for(let i=0;i<5;i++) {
        let circle = document.createElement('div');
        circle.id = 'circle' + i;
        circle.classList.add('circle');
        circle.style.left = (buttonCenterX - 250) + 'px';
        circle.style.top = (buttonCenterY - 250) + 'px';
        circle.style.zIndex = i;
        document.body.appendChild(circle);

        circle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        
        setTimeout(() => {
            circle.classList.add('expand');
        }, i*100);

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
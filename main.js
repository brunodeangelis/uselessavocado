const avocados = [];
let pos = 0;

let mouseX, mouseY;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {
    for (let i = 0; i < 100; i++) {
        let el = document.createElement('img');
        el.setAttribute('src', 'avocado.svg');
        el.setAttribute('data-parallax', random(1, 2))

        el.style.width = random(7, 15) * 2 + 'px';
        el.style.position = 'absolute';
        el.style.left = random(0, window.innerWidth) + 'px';
        el.style.top = random(0, window.innerHeight) + 'px';
        document.querySelector('#app').appendChild(el);
        avocados.push(el);
    }
}

function animate() {
    requestAnimationFrame(animate);
    pos++;
    avocados.forEach(el => {
        el.style.transform = `translate(${mouseX / el.getAttribute('data-parallax') + pos}%, ${mouseY / el.getAttribute('data-parallax') + pos}%)`;

        // if (el.style.left >= window.innerWidth) {
        //     pos = 0;
        // }
    })
}

init();
animate();
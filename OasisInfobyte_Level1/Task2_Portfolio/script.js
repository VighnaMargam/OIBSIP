// ==========================
// MAGNET EFFECT FOR NAME
// ==========================
const magnet = document.getElementById('magnet');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 45;
    const y = (window.innerHeight / 2 - e.pageY) / 45;
    magnet.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translate(${x}px, ${y}px)`;
});


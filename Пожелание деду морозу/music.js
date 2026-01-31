const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔇 Выключить музыку";
    } else {
        music.pause();
        musicBtn.textContent = "🔊 Включить музыку";
    }
});

window.addEventListener('load', () => {
    music.play().catch(() => {
        musicBtn.textContent = "🔊 Включить музыку";
    });
});
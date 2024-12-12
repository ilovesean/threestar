/* script.js */
function updateFPS() {
    const fpsCounter = document.getElementById('fps-counter');
    let lastFrameTime = performance.now();
    function loop() {
        const now = performance.now();
        const fps = Math.round(1000 / (now - lastFrameTime));
        fpsCounter.textContent = `FPS: ${fps}`;
        lastFrameTime = now;
        requestAnimationFrame(loop);
    }
    loop();
}

document.addEventListener('DOMContentLoaded', () => {
    updateFPS();
    loadGames();
});

function loadGames() {
    const gameList = document.querySelectorAll('.game');
    gameList.forEach(game => {
        game.addEventListener('click', () => {
            alert(`${game.textContent} is now loading!`);
            // Integrate your actual game loading logic here
        });
    });
}


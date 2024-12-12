document.addEventListener('DOMContentLoaded', () => {
    // Add game functionalities here
    const gameLinks = document.querySelectorAll('#games-list a');
    gameLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Game will be loaded here!');
        });
    });
});

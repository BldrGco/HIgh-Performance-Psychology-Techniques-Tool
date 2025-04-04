function smashScreen(technique, quote) {
    const overlay = document.getElementById('smashOverlay');
    const superhero = document.getElementById('superhero');
    const smashText = document.getElementById('smashText');
    const quoteText = document.getElementById('quoteText');

    // Reset animations and set quote
    superhero.style.animation = 'none';
    smashText.style.animation = 'none';
    quoteText.style.animation = 'none';
    quoteText.textContent = quote;
    overlay.style.display = 'flex';

    // Trigger animations
    setTimeout(() => {
        superhero.style.animation = 'flyIn 1s ease-out forwards';
        smashText.style.animation = 'smashPop 0.5s ease 1s forwards';
        quoteText.style.animation = 'quoteFade 1s ease 1.5s forwards';
    }, 10);

    // Hide overlay after animation
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 2500);
}

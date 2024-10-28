const noButton = document.getElementById('no-button');
const card = document.querySelector('.card');

noButton.addEventListener('mouseover', () => {
    const cardRect = card.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Generar nuevas posiciones aleatorias dentro del card
    let newX, newY;
    do {
        newX = Math.random() * (cardRect.width - buttonRect.width);
        newY = Math.random() * (cardRect.height - buttonRect.height);
    } while (
        (newX < 0 || newX + buttonRect.width > cardRect.width) ||
        (newY < 0 || newY + buttonRect.height > cardRect.height)
    );

    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const modal = document.getElementById('confirmation-modal');
const closeButton = document.querySelector('.close-button');
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


// Evento para mostrar el modal al presionar "Sí"
yesButton.addEventListener('click', () => {
    // Aquí podrías incluir el código para enviar el correo
    modal.style.display = 'block';
});

// Evento para cerrar el modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal si el usuario hace clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

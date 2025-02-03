const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const messageDiv = document.getElementById('message');
const videoContainer = document.getElementById('video-container');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');

const noMessages = [
    "¿En serio no? 😱 ¡Lo intentaré más tarde!",
    "¡Ay, qué triste! 😭",
    "¡Te estoy esperando! 😘",
    "¿No me amas? 🥺 ¡Lo intentaré de nuevo!",
    "¡No puedes decirme que no! 💔😔"
];

yesButton.addEventListener('click', () => {
    // Cambiar el tamaño de los botones
    yesButton.classList.add('clicked');
    noButton.classList.add('clicked');

    // Mensaje de aceptación
    messageDiv.innerHTML = '¡Sabía que dirías que sí! Te amo mucho, amor 👻😍💗';

    // Mostrar vídeos
    videoContainer.style.display = 'flex';
    video1.style.display = 'block';
    video2.style.display = 'block';
    video3.style.display = 'block';
});

noButton.addEventListener('click', () => {
    // Seleccionar un mensaje aleatorio de las opciones disponibles
    const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];

    // Mostrar un mensaje de rechazo aleatorio
    messageDiv.innerHTML = randomMessage;

    // Los vídeos siguen siendo visibles
    videoContainer.style.display = 'flex'; // Mantener el contenedor de vídeos visible
    video1.style.display = 'block';
    video2.style.display = 'block';
    video3.style.display = 'block';

    // Cambiar el tamaño de los botones
    noButton.classList.add('clicked');
    yesButton.classList.remove('clicked');
});


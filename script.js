const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const messageDiv = document.getElementById('message');
const videoContainer = document.getElementById('video-container');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');

yesButton.addEventListener('click', () => {
  // Cambiar tamaño de los botones
  yesButton.style.transform = 'scale(1.2)';
  noButton.style.transform = 'scale(0.8)';

  // Mostrar el mensaje
  messageDiv.innerHTML = '¡Sabía que dirías que sí! Te amo mucho, amor 👻😍💗';
  videoContainer.style.display = 'block';

  // Reproducir videos
  video1.style.display = 'block';
  video2.style.display = 'block';
  video3.style.display = 'block';
});

noButton.addEventListener('click', () => {
  // Cambiar tamaño de los botones
  yesButton.style.transform = 'scale(0.8)';
  noButton.style.transform = 'scale(1.2)';

  // Mostrar un mensaje diferente cuando se presiona no
  messageDiv.innerHTML = '¿En serio no? Vuelve a intentarlo!';
  videoContainer.style.display = 'none';

  // Detener videos
  video1.style.display = 'none';
  video2.style.display = 'none';
  video3.style.display = 'none';
});

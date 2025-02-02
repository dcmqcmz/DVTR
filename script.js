const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const messageDiv = document.getElementById('message');
const videoContainer = document.getElementById('video-container');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');

let noClickCount = 0;  // Contador de cuántas veces se hace clic en "No"

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
  // Contar cuántas veces se presiona "No"
  noClickCount++;

  // Cambiar tamaño de los botones
  yesButton.style.transform = 'scale(0.8)';
  noButton.style.transform = 'scale(1.2)';

  // Mostrar un mensaje diferente dependiendo de cuántas veces se haga clic en "No"
  switch (noClickCount) {
    case 1:
      messageDiv.innerHTML = '¿En serio no? 😱 ¡No te preocupes, lo intentaré más tarde!';
      break;
    case 2:
      messageDiv.innerHTML = '¿No? ¿De verdad? 🤔 ¡Vas a arrepentirte!';
      break;
    case 3:
      messageDiv.innerHTML = '¿Tercera vez que dices que no? 😅 ¡Aún así te quiero! 😍';
      break;
    case 4:
      messageDiv.innerHTML = '¿No? ¡No es un "no" definitivo! 😜 ¡Lo intentaré más tarde!';
      break;
    default:
      messageDiv.innerHTML = '¡¿En serio no?! ¡Este es un NO muy firme! 😆';
      break;
  }

  // Esconde los videos
  videoContainer.style.display = 'none';
  video1.style.display = 'none';
  video2.style.display = 'none';
  video3.style.display = 'none';
});

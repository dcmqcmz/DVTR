document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('videoContainer').style.display = 'block';
    document.getElementById('no').disabled = true;  // Desactiva el botón 'No'
    document.getElementById('yes').style.transform = "scale(1.1)"; // Hace más grande el botón 'Sí'

    // Reproduce los vídeos
    let videos = document.querySelectorAll('.video');
    videos.forEach(video => {
        video.play();
    });
});

document.getElementById('no').addEventListener('click', function() {
    let options = ["¿En serio no?", "¿De verdad?", "¿Por qué no?"];
    let randomOption = options[Math.floor(Math.random() * options.length)];
    alert(randomOption);
});

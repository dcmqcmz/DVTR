document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const backgroundVideo = document.getElementById("backgroundVideo");

    const noMessages = [
        "¿En serio no? 😢",
        "¿Estás segura? 🥺",
        "Piénsalo bien...",
        "Dale otra oportunidad 💖",
        "Tómate tu tiempo... 🥰"
      "enserio no? 🤡"
      "yaaaaa 😭🤡"
    ];
    let noCount = 0;

    noBtn.addEventListener("click", () => {
        noCount++;
        if (noCount < noMessages.length) {
            alert(noMessages[noCount]);
        } else {
            alert("🤡");
        }

        noBtn.style.fontSize = `${Math.max(14 - noCount, 8)}px`;
        yesBtn.style.fontSize = `${15 + noCount}px`;
    });

    yesBtn.addEventListener("click", () => {
        document.querySelector(".container").innerHTML = `
            <h1>Sabía que dirías que sí, te amo mucho amor 👻😍💗</h1>
        `;
        backgroundVideo.src = "videos/video2.mp4"; // Video cuando dice "Sí"
    });
});

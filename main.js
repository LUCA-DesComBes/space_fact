document.addEventListener("DOMContentLoaded", () => {
    const soleil = document.querySelector('.soleil');
    if (soleil) {
        soleil.addEventListener("mouseover", () => {
            soleil.src = "../public/interieur-soleil.png";
        });
        soleil.addEventListener("mouseout", () => {
            soleil.src = "../public/Soleil.png";
        });
    }

    const mercure = document.querySelector('.mercure');
    if (mercure) {
        mercure.addEventListener("mouseover", () => {
            mercure.src = "../public/interieur-mercure.png";
        });
        mercure.addEventListener("mouseout", () => {
            mercure.src = "../public/Mercure.png";
        });
    }

    const venus = document.querySelector('.venus');
    if (venus) {
        venus.addEventListener("mouseover", () => {
            venus.src = "../public/interieur-venus.png";
        });
        venus.addEventListener("mouseout", () => {
            venus.src = "../public/Venus.png";
        });
    }

    const terre = document.querySelector('.terre');
    if (terre) {
        terre.addEventListener("mouseover", () => {
            terre.src = "../public/interieur-terre.png";
        });
        terre.addEventListener("mouseout", () => {
            terre.src = "../public/Terre.png";
        });
    }

    const lune = document.querySelector('.lune');
    if (lune) {
        lune.addEventListener("mouseover", () => {
            lune.src = "../public/interieur-lune.png";
        });
        lune.addEventListener("mouseout", () => {
            lune.src = "../public/Lune.png";
        });
    }

    const mars = document.querySelector('.mars');
    if (mars) {
        mars.addEventListener("mouseover", () => {
            mars.src = "../public/interieur-mars.png";
        });
        mars.addEventListener("mouseout", () => {
            mars.src = "../public/Mars.png";
        });
    }

    const jupiter = document.querySelector('.jupiter');
    if (jupiter) {
        jupiter.addEventListener("mouseover", () => {
            jupiter.src = "../public/interieur-jupiter.png";
        });
        jupiter.addEventListener("mouseout", () => {
            jupiter.src = "../public/Jupiter.png";
        });
    }

    const saturne = document.querySelector('.saturne');
    if (saturne) {
        saturne.addEventListener("mouseover", () => {
            saturne.src = "../public/interieur-saturne.png";
        });
        saturne.addEventListener("mouseout", () => {
            saturne.src = "../public/Saturne.png";
        });
    }
    const uranus = document.querySelector('.uranus');
    if (uranus) {
        uranus.addEventListener("mouseover", () => {
            uranus.src = "../public/interieur-uranus.png";
        });
        uranus.addEventListener("mouseout", () => {
            uranus.src = "../public/Uranus.png";
        });
    }
    const neptune = document.querySelector('.neptune');
    if (neptune) {
        neptune.addEventListener("mouseover", () => {
            neptune.src = "../public/interieur-neptune.png";
        });
        neptune.addEventListener("mouseout", () => {
            neptune.src = "../public/Neptune.png";
        });
    }
});
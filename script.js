window.onload = function () {

    // 📸 Image Slider
    const images = ["image1.png", "image2.png", "image3.jpg"];
    let index = 0;
    const slide = document.getElementById("slide");

    setInterval(() => {
        index = (index + 1) % images.length;
        slide.src = images[index];
    }, 3000);

    // 🌺 Lilies
    const petalsContainer = document.getElementById("petals");

    for (let i = 0; i < 25; i++) {
        let petal = document.createElement("span");

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (4 + Math.random() * 6) + "s";

        petalsContainer.appendChild(petal);
    }

    // 🎶 Music (starts on first click anywhere)
    document.body.addEventListener("click", function () {
        document.getElementById("bgMusic").play();
    }, { once: true });

};
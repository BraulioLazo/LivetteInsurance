

const image3DEffect = (container, image) => {
    let imagePosition = image.getBoundingClientRect();

    let aspectRatio = window.innerWidth / window.innerHeight;

    window.addEventListener("resize", () => {
        aspectRatio = window.innerWidth / window.innerHeight;
        imagePosition = image.getBoundingClientRect();
    });

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            aspectRatio = window.innerWidth / window.innerHeight;
            imagePosition = image.getBoundingClientRect();
        }
    });

    document.addEventListener("scroll", () => {

        aspectRatio = window.innerWidth / window.innerHeight;
        imagePosition = image.getBoundingClientRect();

    });

    container.addEventListener("mousemove", (event) => {

        const positionX = Math.floor(event.clientX - imagePosition.left);
        const positionY = Math.floor(event.clientY - imagePosition.top);

        const centerX = imagePosition.width / 2;
        const centerY = imagePosition.height / 2;

        const normalizedX = -(positionX - centerX) / centerX * aspectRatio;
        const normalizedY = (positionY - centerY) / centerY;

        const maxRotation = 10;
        const rotateY = normalizedY * maxRotation;
        const rotateX = normalizedX * maxRotation;

        image.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    });

    container.addEventListener("mouseleave", () => {
        image.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
};

document.addEventListener("DOMContentLoaded", function(){
    const containerElement = document.querySelectorAll(".image__container");
    containerElement.forEach(containerElement => {
        const imageElement = containerElement.querySelector(".img__to__animate");
        image3DEffect(containerElement, imageElement);
    });
});
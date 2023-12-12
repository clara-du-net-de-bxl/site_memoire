document.addEventListener("mousemove", (e) => {
    const window = document.querySelector(".window");
    const x = e.clientX - 100; // Ajustez la position x du centre de la "fenêtre"
    const y = e.clientY - 100; // Ajustez la position y du centre de la "fenêtre"
    
    window.style.transform = `translate(${x}px, ${y}px)`;
});

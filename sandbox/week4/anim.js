document.querySelector(".green").addEventListener('touchup', (e) => {
    e.preventDefault();
    document.querySelector(".blue").classList.toggle(".open");
})
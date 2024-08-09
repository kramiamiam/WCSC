document.addEventListener('DOMContentLoaded', (event) => {
    const titles = ['#basketball-title', '#football-title', '#gym-title', '#resto-title', '#tennis-title', '#piscine-title'];

    titles.forEach(selector => {
        const h1Element = document.querySelector(selector);

        if (h1Element) { // Vérifiez si l'élément existe
            h1Element.addEventListener('click', () => {
                h1Element.classList.add('transform');
            });
        }
    });
});

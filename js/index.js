document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile-link');

    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const figure = link.querySelector('figure');
            const name = figure.querySelector('figcaption')?.textContent?.trim() || '';
            const image = figure.querySelector('img')?.src || '';

            if (name && image) {
                localStorage.setItem('perfilAtivoNome', name);
                localStorage.setItem('perfilAtivoImagem', image);
            }
        });
    });
});
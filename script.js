/*Script para card en index*/

document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('overlay');
    const expandedArticle = document.getElementById('expanded-article');
    const expandedContent = expandedArticle.querySelector('.content');
    const viewMoreButtons = document.querySelectorAll('.btn.btn-secondary');
    const closeButton = document.getElementById('close-btn');

    const closeArticle = () => {
        overlay.style.opacity = '0';
        expandedArticle.style.transform = 'translate(-50%, -50%) scale(0.8)';
        expandedArticle.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            expandedArticle.style.display = 'none';
        }, 300);
    };

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const cardBody = button.closest('.card-body');
            const title = cardBody.querySelector('.card-title').innerText;
            const fullContent = cardBody.querySelector('.full-content').innerHTML;

            expandedContent.innerHTML = `
                <h2>${title}</h2>
                <p>${fullContent}</p>
                <button id="close-btn" class="btn btn-secondary">Cerrar</button>
            `;

            overlay.style.display = 'block';
            expandedArticle.style.display = 'block';
            setTimeout(() => {
                overlay.style.opacity = '1';
                expandedArticle.style.transform = 'translate(-50%, -50%) scale(1)';
                expandedArticle.style.opacity = '1';
            }, 50);

            document.getElementById('close-btn').addEventListener('click', closeArticle);
        });
    });

    overlay.addEventListener('click', closeArticle);
});

/*Script para boton catalogo en la tienda*/

function abrirCatalogo() {
    window.open('../multimedia/catalogovinos.pdf', '_blank');
}

function realizarBusqueda() {
    const query = document.querySelector('.search-bar').value;
    alert('Realizando búsqueda para: ' + query);
}
// Função para verificar se o artigo está visível na tela
function verificarVisibilidade() {
    // Obtém todos os artigos
    const artigos = document.querySelectorAll('main article');

    artigos.forEach(article => {
        // Obtém a posição do artigo em relação à tela
        const rect = article.getBoundingClientRect();

        // Verifica se o artigo está dentro da área visível da tela
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Adiciona a classe "visible" quando o artigo entra na tela
            article.classList.add('visible');
        } else {
            // Remove a classe "visible" caso o artigo saia da tela
            article.classList.remove('visible');
        }
    });
}

// Chama a função assim que o script é carregado
window.addEventListener('scroll', verificarVisibilidade);

// Verifica a visibilidade no carregamento inicial da página
verificarVisibilidade();

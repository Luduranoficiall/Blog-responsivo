// Funções para interação com o usuário
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-icon');
    
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}

// Event listener para abrir o menu mobile
document.addEventListener('click', (e) => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    
    if (!menuIcon.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});

// Função para carregar posts dinamicamente
function loadPosts() {
    // Aqui você pode adicionar lógica para carregar posts de uma API ou banco de dados
    // Por exemplo, usando fetch ou XMLHttpRequest
    // Exemplo simplificado:
    const postContainer = document.getElementById('posts');
    const posts = [
        { title: 'Post 1', excerpt: 'Resumo do Post 1', image: 'https://via.placeholder.com/300x200' },
        { title: 'Post 2', excerpt: 'Resumo do Post 2', image: 'https://via.placeholder.com/300x200' },
        { title: 'Post 3', excerpt: 'Resumo do Post 3', image: 'https://via.placeholder.com/300x200' }
    ];

    // Remover elementos existentes antes de adicionar novos
    while (postContainer.firstChild) {
        postContainer.removeChild(postContainer.firstChild);
    }

    // Adicionar posts dinamicamente
    posts.forEach((post) => {
        const article = document.createElement('article');
        article.className = 'post-item';

        const img = document.createElement('img');
        img.src = post.image;
        img.alt = `Imagem do post ${post.title}`;
        img.className = 'post-image';

        const h3 = document.createElement('h3');
        h3.textContent = post.title;

        const p = document.createElement('p');
        p.textContent = post.excerpt;

        const readMore = document.createElement('a');
        readMore.href = '#';
        readMore.textContent = 'Ler mais';
        readMore.className = 'read-more';

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(readMore);

        postContainer.appendChild(article);
    });
}
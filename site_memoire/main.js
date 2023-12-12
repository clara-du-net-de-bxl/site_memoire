function changeContent(page) {
    var contentElement = document.getElementById('content');
    var newContent = '';

    if (page === 'page1') {
        newContent = '<h2>Page 1</h2><p>Contenu de la page 1.</p>';
    } else if (page === 'page2') {
        newContent = '<h2>Page 2</h2><p>Contenu de la page 2.</p>';
    } else if (page === 'page3') {
        newContent = '<h3>Page 3</h3><p>Contenu de la page 3.</p>';
    }
    
    contentElement.innerHTML = newContent;
}

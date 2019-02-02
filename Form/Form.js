document.querySelector('.form-button').addEventListener('click', (e) => {
    e.preventDefault();
    const d = new Date();
    
    const data = {
        header: document.querySelector('.form-title').value,
        date: `
            ${d.toLocaleDateString('en-GB', { month: 'short' })}
            ${d.getDay()}th,
            ${d.getFullYear()}
            `,
        article: document.querySelector('.form-article').value,
    }
    document.querySelector('.form-title').value = null;
    document.querySelector('.form-article').value = null;
    populateArticle(data);
});
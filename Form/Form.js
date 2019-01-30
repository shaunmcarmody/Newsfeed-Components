document.querySelector('.form-button').addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
        header: document.querySelector('.form-title').value,
        date: 'January 30th 2018',
        article: document.querySelector('.form-article').value,
    }
    document.querySelector('.form-title').value = null;
    document.querySelector('.form-article').value = null;
    populateArticle(data);
})
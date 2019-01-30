/*  Because classes are not hoisted you will need to start your code at the 
    bottom of the page.  Look for the comment "START HERE" */

class Article {
  constructor() {
    // assign this.domElement to the passed in domElement
    this.domElement = document.querySelector('.article-template').cloneNode(true);
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.textContent === 'Expand' ? this.expandButton.textContent = 'Close' : this.expandButton.textContent = 'Expand';
  }

  populate(header, date, article, cb) {
    this.domElement.classList.remove('article-template');
    this.domElement.querySelector('.title').textContent = header;
    this.domElement.querySelector('.date').textContent = date;
    this.domElement.querySelector('.content').textContent = article;
    cb(this.domElement);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
  iterate over the articles NodeList and create a new instance of Article by passing in 
  each article as a parameter to the constructor.

*/

// let articles = document.querySelectorAll('.article');

// articles.forEach(el => new Article(el));

jsonArray.forEach((el) => {
  // let article = document.querySelector('.article-template').cloneNode(true);
  article = new Article();
  article.populate(el.header, el.date, el.article, (article) => {
    const articles = document.querySelector('.articles');
    articles.appendChild(article);
  });
})
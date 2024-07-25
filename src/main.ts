import { fetchArticles, Article } from './fetchArticles.js';
import { submitForm } from './formHandler.js';

document.addEventListener('DOMContentLoaded', async () => {
    const articlesContainer = document.querySelector('.blog-posts') as HTMLElement;
    if (articlesContainer) {
        const data = await fetchArticles();
        displayArticles(data.responses, articlesContainer);
    } else {
        console.error('Element with class "blog-posts" not found.');
    }

    const form = document.querySelector('.footer-form') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', submitForm);
    } else {
        console.error('Form element with class "footer-form" not found.');
    }
});

function displayArticles(articles: Article[], container: HTMLElement): void {
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('blog-post');

        const img = document.createElement('img');
        img.src = article.image;
        img.alt = `Image for ${article.text}`;
        img.classList.add('blog-post-image');

        const articleContent = document.createElement('div');
        articleContent.classList.add('blog-post-content');

        const tag = document.createElement('div');
        tag.textContent = article.title;
        tag.classList.add('blog-post-tag', `blog-post-tag-${article.title.toLowerCase()}`);

        const time = document.createElement('div');
        time.textContent = article.timeForReading;
        time.classList.add('blog-post-time');

        const title = document.createElement('h3');
        title.textContent = article.text;
        title.classList.add('blog-post-title');

        const link = document.createElement('a');
        link.textContent = 'Read more >';
        link.href = '#';
        link.classList.add('blog-post-link');

        articleContent.appendChild(tag);
        articleContent.appendChild(time);
        articleContent.appendChild(title);
        articleContent.appendChild(link);

        articleElement.appendChild(img);
        articleElement.appendChild(articleContent);

        container.appendChild(articleElement);
    });
}

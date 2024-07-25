export interface Article {
    title: string;
    timeForReading: string;
    text: string;
    image: string;
}

export async function fetchArticles(): Promise<{ responses: Article[] }> {
    try {
        const response = await fetch('https://coworker-se8z.onrender.com/article/all');
        return await response.json();
    } catch (error) {
        console.error('Error fetching articles:', error);
        return { responses: [] };
    }
}

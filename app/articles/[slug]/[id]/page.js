import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { id } = params;

    const article = await getArticle(id)

    return {
        title: article.title,
        description: article.body.slice(0, 100),
    }
}

const getArticle = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'force-cache',
    })
    const article = response.json();

    return article;
}

const Article = async ({ params }) => {
    const id = params.id;

    const article = await getArticle(id);

    return (
        <div>
            <main>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
                <Link href="/articles">Back to Articles</Link>
            </main>
        </div>
    );
};

export default Article;